import { CreateChat } from '../Chat';
import { BusinessContact, CreateContact, PrivateContact } from '../Contact';
import MessageMedia from '../Media';
import Message from '../Message';
import {
	ChatId,
	MessageEditOptions,
	MessageInfo,
	ReactionList,
} from '../Message/models';
import Reaction from '../Reaction';
import { MessageContent, MessageSendOptions } from './models';

export class Client {
	constructor() {}

	async getMessageById(messageId: string) {
		const msg = await (async () => {
			let msg = window.Store.Msg.get(messageId);
			if (msg) return window.WWebJS.getMessageModel(msg);

			const params = messageId.split('_');
			if (params.length !== 3)
				throw new Error('Invalid serialized message id specified');

			let messagesObject = await window.Store.Msg.getMessagesById([messageId]);
			if (messagesObject && messagesObject.messages.length)
				msg = messagesObject.messages[0];

			if (msg) return window.WWebJS.getMessageModel(msg);
		})();

		if (msg) return new Message(this, msg);
		return null;
	}

	async getChatById(chatId: string) {
		const rawChat = await window.WWebJS.getChat(chatId);
		return CreateChat(this, rawChat);
	}

	async getContactById(contactId: ChatId | string) {
		const rawContact = window.WWebJS.getContact(contactId);
		return CreateContact(this, rawContact);
	}

	async getQuotedMessage(messageId: string) {
		const msg = window.Store.Msg.get(messageId);
		const quotedMsg = window.Store.QuotedMsg.getQuotedMsgObj(msg);
		const quotedMessageModel = window.WWebJS.getMessageModel(quotedMsg);
		return new Message(this, quotedMessageModel);
	}

	async sendMessage(
		chatId: string,
		content: MessageContent,
		options: MessageSendOptions = {}
	) {
		if (options.mentions) {
			!Array.isArray(options.mentions) && (options.mentions = [options.mentions]);
		}

		let internalOptions: any = {
			linkPreview: options.linkPreview === false ? undefined : true,
			sendAudioAsVoice: options.sendAudioAsVoice,
			sendVideoAsGif: options.sendVideoAsGif,
			sendMediaAsSticker: options.sendMediaAsSticker,
			sendMediaAsDocument: options.sendMediaAsDocument,
			caption: options.caption,
			quotedMessageId: options.quotedMessageId,
			parseVCards: options.parseVCards === false ? false : true,
			mentionedJidList: options.mentions || [],
		};

		const sendSeen =
			typeof options.sendSeen === 'undefined' ? true : options.sendSeen;

		if (content instanceof MessageMedia) {
			internalOptions.attachment = content;
			(internalOptions.isViewOnce = options.isViewOnce), (content = '');
		} else if (content instanceof Location) {
			internalOptions.location = content;
			content = '';
		}

		/**
		 * [TODO] a way to make ffmpeg work.
		 */
		// if (internalOptions.sendMediaAsSticker && internalOptions.attachment) {
		// 	internalOptions.attachment = await Util.formatToWebpSticker(
		// 		internalOptions.attachment,
		// 		{
		// 			name: options.stickerName,
		// 			author: options.stickerAuthor,
		// 			categories: options.stickerCategories,
		// 		},
		// 		this.pupPage
		// 	);
		// }

		try {
			const chatWid = window.Store.WidFactory.createWid(chatId);
			const chat = await window.Store.Chat.find(chatWid);

			if (sendSeen) {
				await window.WWebJS.sendSeen(chatId);
			}

			const msg = await window.WWebJS.sendMessage(chat, content, options, sendSeen);
			const newMessage = window.WWebJS.getMessageModel(msg);
			return new Message(this, newMessage);
		} catch (e) {
			console.warn(e);
			console.log({ chatId, content, options, sendSeen });
		}
	}

	async reactToMesage(serializedId: string, reactionEmoji: string) {
		const msg = await window.Store.Msg.get(serializedId);
		return await window.Store.sendReactionToMsg(msg, reactionEmoji);
	}

	async forwardMessageTochat(serializedMsgId: string, serializedChatId: string) {
		let msg = window.Store.Msg.get(serializedMsgId);
		let chat = window.Store.Chat.get(serializedChatId);

		return await chat.forwardMessages([msg]);
	}

	async downloadMediaFromMessage(serializedMsgId: string) {
		const msg = window.Store.Msg.get(serializedMsgId);
		if (!msg || !msg.mediaData) {
			return undefined;
		}
		if (msg.mediaData.mediaStage != 'RESOLVED') {
			// try to resolve media
			await msg.downloadMedia({
				downloadEvenIfExpensive: true,
				rmrReason: 1,
			});
		}

		if (
			msg.mediaData.mediaStage.includes('ERROR') ||
			msg.mediaData.mediaStage === 'FETCHING'
		) {
			// media could not be downloaded
			return undefined;
		}

		try {
			const decryptedMedia =
				await window.Store.DownloadManager.downloadAndMaybeDecrypt({
					directPath: msg.directPath,
					encFilehash: msg.encFilehash,
					filehash: msg.filehash,
					mediaKey: msg.mediaKey,
					mediaKeyTimestamp: msg.mediaKeyTimestamp,
					type: msg.type,
					signal: new AbortController().signal,
				});

			const data = await window.WWebJS.arrayBufferToBase64Async(decryptedMedia);

			return new MessageMedia(data, msg.mimetype, msg.filename, msg.size);
		} catch (e: any) {
			if (e.status && e.status === 404) return undefined;
			throw e;
		}
	}

	async deleteMessage(serializedMsgId: string, toEveryone?: boolean) {
		let msg = window.Store.Msg.get(serializedMsgId);
		let chat = await window.Store.Chat.find(msg.id.remote);

		const canRevoke =
			window.Store.MsgActionChecks.canSenderRevokeMsg(msg) ||
			window.Store.MsgActionChecks.canAdminRevokeMsg(msg);
		if (toEveryone && canRevoke) {
			return window.Store.Cmd.sendRevokeMsgs(chat, [msg], {
				clearMedia: true,
				type: msg.id.fromMe ? 'Sender' : 'Admin',
			});
		}

		return window.Store.Cmd.sendDeleteMsgs(chat, [msg], true);
	}

	async starMessage(serializedMessageId: string) {
		let msg = window.Store.Msg.get(serializedMessageId);

		if (window.Store.MsgActionChecks.canStarMsg(msg)) {
			let chat = await window.Store.Chat.find(msg.id.remote);
			return window.Store.Cmd.sendStarMsgs(chat, [msg], false);
		}
	}

	async unstarMessage(serializedMessageId: string) {
		let msg = window.Store.Msg.get(serializedMessageId);

		if (window.Store.MsgActionChecks.canStarMsg(msg)) {
			let chat = await window.Store.Chat.find(msg.id.remote);
			return window.Store.Cmd.sendUnstarMsgs(chat, [msg], false);
		}
	}

	async pinMessage(serializedMessageId: string, durationInSeconds: number) {
		return window.WWebJS.pinUnpinMsgAction(
			serializedMessageId,
			1,
			durationInSeconds
		);
	}

	async unpinMessage(serializedMsgId: string) {
		return await window.WWebJS.pinUnpinMsgAction(serializedMsgId, 2);
	}

	async getMessageInfo(serializedMessageId: string): Promise<MessageInfo | null> {
		const msg = window.Store.Msg.get(serializedMessageId);
		if (!msg || !msg.id.fromMe) return null;

		// Idk why this setTimeout is like this but ok I guess... Ask Purpshell :v
		return new Promise(resolve => {
			setTimeout(async () => {
				resolve(await window.Store.getMsgInfo(msg.id));
			}, (Date.now() - msg.t * 1000 < 1250 && Math.floor(Math.random() * (1200 - 1100 + 1)) + 1100) || 0);
		});
	}

	async getReactionsFromMessage(
		serializedMessageId: string
	): Promise<ReactionList | null> {
		const msgReactions = await window.Store.Reactions.find(serializedMessageId);
		if (!msgReactions || !msgReactions.reactions.length) return null;
		const reactionList = msgReactions.reactions.serialize();

		if (!reactionList) {
			return null;
		}

		return reactionList.map((reaction: any) => {
			reaction.senders = reaction.senders.map((sender: any) => {
				sender.timestamp = Math.round(sender.timestamp / 1000);
				return new Reaction(this, sender);
			});
			return reaction;
		});
	}

	async editMessage(
		serializedMessageId: string,
		content: MessageContent,
		options: MessageEditOptions
	) {
		if (options.mentions) {
			!Array.isArray(options.mentions) && (options.mentions = [options.mentions]);
		}

		let internalOptions = {
			linkPreview: options.linkPreview === false ? undefined : true,
			mentionedJidList: options.mentions || [],
			extraOptions: options.extra,
		};

		let msg = window.Store.Msg.get(serializedMessageId);
		if (!msg) return null;

		let canEdit =
			window.Store.MsgActionChecks.canEditText(msg) ||
			window.Store.MsgActionChecks.canEditCaption(msg);
		if (canEdit) {
			const msgEdit = await window.WWebJS.editMessage(msg, content, internalOptions);
			return new Message(this, msgEdit.serialize());
		} else {
			console.warn("you can't edit this message.");
		}

		return null;
	}
}
