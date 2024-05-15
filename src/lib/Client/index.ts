import { CreateChat } from '../Chat';
import Chat from '../Chat/GroupChat';
import { SearchMessageOptions } from '../Chat/models';
import { BusinessContact, CreateContact, PrivateContact } from '../Contact';
import Label from '../Label';
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

			return new MessageMedia(msg.mimetype, data, msg.filename, msg.size);
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

	async sendSeen(serializedChatId: string): Promise<boolean> {
		return window.WWebJS.sendSeen(serializedChatId);
	}

	async clearChatMessages(serializedChatId: string): Promise<boolean> {
		return window.WWebJS.sendClearChat(serializedChatId);
	}

	async deleteChat(serializedChatId: string): Promise<boolean> {
		return window.WWebJS.sendDeleteChat(serializedChatId);
	}

	async archiveChat(serializedChatId: string): Promise<boolean> {
		try {
			let chat = await window.Store.Chat.get(serializedChatId);
			await window.Store.Cmd.archiveChat(chat, true);
			return true;
		} catch (e) {
			return false;
		}
	}

	async unarchiveChat(serializedChatId: string): Promise<boolean> {
		try {
			let chat = await window.Store.Chat.get(serializedChatId);
			await window.Store.Cmd.archiveChat(chat, false);
			return true;
		} catch (e) {
			return false;
		}
	}

	async pinChat(serializedChatId: string): Promise<boolean> {
		try {
			let chat = window.Store.Chat.get(serializedChatId);
			if (chat.pin) {
				return true;
			}
			const MAX_PIN_COUNT = 3;
			const chatModels = window.Store.Chat.getModelsArray();
			if (chatModels.length > MAX_PIN_COUNT) {
				let maxPinned = chatModels[MAX_PIN_COUNT - 1].pin;
				if (maxPinned) {
					return false;
				}
			}
			await window.Store.Cmd.pinChat(chat, true);
			return true;
		} catch (e) {
			return false;
		}
	}

	async unpinChat(serializedChatId: string): Promise<boolean> {
		try {
			let chat = window.Store.Chat.get(serializedChatId);
			if (!chat.pin) {
				return true;
			}
			await window.Store.Cmd.pinChat(chat, false);
			return true;
		} catch (e) {
			return false;
		}
	}

	async muteChat(serializedChatId: string, unmuteDate?: Date): Promise<boolean> {
		try {
			const actualUnmuteDate = unmuteDate ? unmuteDate.getTime() / 1000 : -1;
			let chat = await window.Store.Chat.get(serializedChatId);
			await chat.mute.mute({ expiration: actualUnmuteDate, sendDevice: !0 });
			return true;
		} catch (e) {
			return false;
		}
	}

	async unmuteChat(serializedChatId: string): Promise<boolean> {
		try {
			let chat = await window.Store.Chat.get(serializedChatId);
			await window.Store.Cmd.muteChat(chat, false);
			return true;
		} catch (e) {
			return false;
		}
	}

	async markChatUnread(serializedChatId: string): Promise<boolean> {
		try {
			let chat = await window.Store.Chat.get(serializedChatId);
			await window.Store.Cmd.markChatUnread(chat, true);
			return true;
		} catch (e) {
			return false;
		}
	}

	async fetchMessagesFromChat(
		serializedChatId: string,
		searchOptions?: SearchMessageOptions
	): Promise<Message[]> {
		const msgFilter = (m: any) => {
			if (m.isNotification) {
				return false; // dont include notification messages
			}
			if (
				searchOptions &&
				searchOptions.fromMe !== undefined &&
				m.id.fromMe !== searchOptions.fromMe
			) {
				return false;
			}
			return true;
		};

		const chat = window.Store.Chat.get(serializedChatId);
		let msgs = chat.msgs.getModelsArray().filter(msgFilter);

		if (searchOptions && searchOptions.limit > 0) {
			while (msgs.length < searchOptions.limit) {
				const loadedMessages = await window.Store.ConversationMsgs.loadEarlierMsgs(
					chat
				);
				if (!loadedMessages || !loadedMessages.length) break;
				msgs = [...loadedMessages.filter(msgFilter), ...msgs];
			}

			if (msgs.length > searchOptions.limit) {
				msgs.sort((a: any, b: any) => (a.t > b.t ? 1 : -1));
				msgs = msgs.splice(msgs.length - searchOptions.limit);
			}
		}

		return msgs
			.map((m: any) => window.WWebJS.getMessageModel(m))
			.map((model: Record<string, any>) => new Message(this, model));
	}

	/** Valid for 25 seconds or until calling `Client.clearChatState(serializedChatId)` */
	async sendTypingStateToChat(serializedChatId: string): Promise<boolean> {
		try {
			window.WWebJS.sendChatstate('typing', serializedChatId);
			return true;
		} catch (e) {
			return false;
		}
	}

	/** Valid for 25 seconds or until calling `Client.clearChatState(serializedChatId)` */
	async sendRecordingAudioStateToChat(serializedChatId: string): Promise<boolean> {
		try {
			window.WWebJS.sendChatstate('recording', serializedChatId);
			return true;
		} catch (e) {
			return false;
		}
	}

	/** Clears chatState. Used to revert `sendRecordningAudioStateToChat` or `sendTypingStateToChat` */
	async clearChatState(serializedChatId: string): Promise<boolean> {
		try {
			window.WWebJS.sendChatstate('stop', serializedChatId);
			return true;
		} catch (e) {
			return false;
		}
	}

	// [TODO]: Check wtf is this;
	async getChatLabels(serializedChatId: string): Promise<Label[]> {
		return window.WWebJS.getChatLabels(serializedChatId);
	}

	async getChatsByLabelId(labelId: string): Promise<Chat[]> {
		try {
			const label = window.Store.Label.get(labelId);
			const labelItems = label.labelItemCollection.getModelsArray();
			const chatIds: string[] = labelItems.reduce((result: string[], item: any) => {
				if (item.parentType === 'Chat') {
					result.push(item.parentId);
				}
				return result;
			}, []);

			return Promise.all(chatIds.map(id => this.getChatById(id)));
		} catch (e) {
			return [];
		}
	}

	async addOrRemoveLabelsFromChat(
		labelIds: (string | number)[],
		serializedChatIds: string[]
	) {
		if (['smba', 'smbi'].indexOf(window.Store.Conn.platform) === -1) {
			throw '[LT01] Only Whatsapp business';
		}
		const labels = window.WWebJS.getLabels().filter(
			(e: any) => labelIds.find(l => l == e.id) !== undefined
		);
		const chats = window.Store.Chat.filter((e: any) =>
			serializedChatIds.includes(e.id._serialized)
		);

		let actions = labels.map((label: Label) => ({ id: label.id, type: 'add' }));

		chats.forEach((chat: any) => {
			(chat.labels || []).forEach((n: any) => {
				if (!actions.find((e: any) => e.id == n)) {
					actions.push({ id: n, type: 'remove' });
				}
			});
		});

		return await window.Store.Label.addOrRemoveLabels(actions, chats);
	}

	async getAllChats(): Promise<Chat[]> {
		const proto_chats = await window.WWebJS.getChats();
		return proto_chats.map((chat: any) => CreateChat(this, chat));
	}
}
