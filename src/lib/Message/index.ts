'use strict';

import { RawMessage } from '../../types/Message';
import { Client } from '../Client';
import { MessageContent, MessageSendOptions } from '../Client/models';
import Location from '../Location';
import MessageMedia from '../Media';
import { ChatId, InviteV4Data, MessageAck, MessageId, MessageTypes } from './models';

class Message {
	client: Client;
	_data!: RawMessage;
	/** ACK status for the message */
	ack!: MessageAck;
	/** If the message was sent to a group, this field will contain the user that sent the message. */
	author?: string;
	/** String that represents from which device type the message was sent */
	deviceType!: string;
	/** Message content */
	body!: string;
	/** Indicates if the message was a broadcast */
	broadcast!: boolean;
	/** Indicates if the message was a status update */
	isStatus!: boolean;
	/** Indicates if the message is a Gif */
	isGif!: boolean;
	/** Indicates if the message will disappear after it expires */
	isEphemeral!: boolean;
	/** ID for the Chat that this message was sent to, except if the message was sent by the current user */
	from!: string;
	/** Indicates if the message was sent by the current user */
	fromMe!: boolean;
	/** Indicates if the message has media available for download */
	hasMedia!: boolean;
	/** Indicates if the message was sent as a reply to another message */
	hasQuotedMsg!: boolean;
	/** Indicates whether there are reactions to the message */
	hasReaction!: boolean;
	/** Indicates the duration of the message in seconds */
	duration!: string;
	/** ID that represents the message */
	id!: MessageId;
	/** Indicates if the message was forwarded */
	isForwarded!: boolean;
	/**
	 * Indicates how many times the message was forwarded.
	 * The maximum value is 127.
	 */
	forwardingScore!: number;
	/** Indicates if the message was starred */
	isStarred!: boolean;
	/** Location information contained in the message, if the message is type "location" */
	location?: Location;
	/** List of vCards contained in the message */
	vCards!: string[];
	/** Invite v4 info */
	inviteV4?: InviteV4Data;
	/** MediaKey that represents the sticker 'ID' */
	mediaKey?: string;
	/** Indicates the mentions in the message body. */
	mentionedIds!: ChatId[];
	/** Indicates whether there are group mentions in the message body */
	groupMentions!: {
		groupSubject: string;
		groupJid: {
			server: string;
			user: string;
			_serialized: string;
		};
	}[];
	/** Unix timestamp for when the message was created */
	timestamp!: number;
	/**
	 * ID for who this message is for.
	 * If the message is sent by the current user, it will be the Chat to which the message is being sent.
	 * If the message is sent by another user, it will be the ID for the current user.
	 */
	to!: string;
	/** Message type */
	type!: MessageTypes;
	/** Links included in the message. */
	links!: Array<{
		link: string;
		isSuspicious: boolean;
	}>;
	/** Order ID */
	orderId!: string;
	/** title */
	title?: string;
	/** description*/
	description?: string;
	/** Business Owner JID */
	businessOwnerJid?: string;
	/** Product JID */
	productId?: string;
	/** Last edit time */
	latestEditSenderTimestampMs?: number;
	/** Last edit message author */
	latestEditMsgKey?: MessageId;
	/** Message buttons */
	dynamicReplyButtons?: object;
	/** Selected button ID */
	selectedButtonId?: string;
	/** Selected list row ID */
	selectedRowId?: string;
	/** Returns message in a raw format */
	pollName!: string;
	/** Avaiaible poll voting options */
	pollOptions!: string[];
	/** False for a single choice poll, true for a multiple choice poll */
	allowMultipleAnswers!: boolean;
	/** Order Token for message type ORDER */
	token?: string;

	pollInvalidated?: boolean;
	isSentCagPollCreation?: boolean;

	constructor(client: Client, data: RawMessage) {
		this.client = client;
		if (data) return this._patch(data);
	}

	_patch(data: RawMessage) {
		this._data = data;

		/**
		 * MediaKey that represents the sticker 'ID'
		 * @type {string}
		 */
		this.mediaKey = data.mediaKey;

		/**
		 * ID that represents the message
		 * @type {object}
		 */
		this.id = data.id;

		/**
		 * ACK status for the message
		 * @type {MessageAck}
		 */
		this.ack = data.ack;

		/**
		 * Indicates if the message has media available for download
		 * @type {boolean}
		 */
		this.hasMedia = Boolean(data.mediaKey && data.directPath);

		/**
		 * Message content
		 * @type {string}
		 */
		this.body = this.hasMedia
			? data.caption || ''
			: data.body || data.pollName || '';

		/**
		 * Message type
		 * @type {MessageTypes}
		 */
		this.type = data.type;

		/**
		 * Unix timestamp for when the message was created
		 * @type {number}
		 */
		this.timestamp = data.t;

		/**
		 * ID for the Chat that this message was sent to, except if the message was sent by the current user.
		 * @type {string}
		 */
		this.from =
			typeof data.from === 'object' && data.from !== null
				? data.from._serialized
				: data.from;

		/**
		 * ID for who this message is for.
		 *
		 * If the message is sent by the current user, it will be the Chat to which the message is being sent.
		 * If the message is sent by another user, it will be the ID for the current user.
		 * @type {string}
		 */
		this.to =
			typeof data.to === 'object' && data.to !== null
				? data.to._serialized
				: data.to;

		/**
		 * If the message was sent to a group, this field will contain the user that sent the message.
		 * @type {string}
		 */
		this.author =
			typeof data.author === 'object' && data.author !== null
				? data.author._serialized
				: data.author;

		/**
		 * String that represents from which device type the message was sent
		 * @type {string}
		 */
		this.deviceType =
			typeof data.id.id === 'string' && data.id.id.length > 21
				? 'android'
				: typeof data.id.id === 'string' && data.id.id.substring(0, 2) === '3A'
				? 'ios'
				: 'web';
		/**
		 * Indicates if the message was forwarded
		 * @type {boolean}
		 */
		this.isForwarded = data.isForwarded;

		/**
		 * Indicates how many times the message was forwarded.
		 *
		 * The maximum value is 127.
		 * @type {number}
		 */
		this.forwardingScore = data.forwardingScore || 0;

		/**
		 * Indicates if the message is a status update
		 * @type {boolean}
		 */
		this.isStatus = data.isStatusV3 || data.id.remote === 'status@broadcast';

		/**
		 * Indicates if the message was starred
		 * @type {boolean}
		 */
		this.isStarred = data.star;

		/**
		 * Indicates if the message was a broadcast
		 * @type {boolean}
		 */
		this.broadcast = data.broadcast;

		/**
		 * Indicates if the message was sent by the current user
		 * @type {boolean}
		 */
		this.fromMe = data.id.fromMe;

		/**
		 * Indicates if the message was sent as a reply to another message.
		 * @type {boolean}
		 */
		this.hasQuotedMsg = data.quotedMsg ? true : false;

		/**
		 * Indicates whether there are reactions to the message
		 * @type {boolean}
		 */
		this.hasReaction = data.hasReaction ? true : false;

		/**
		 * Indicates the duration of the message in seconds
		 * @type {string}
		 */
		this.duration = data.duration ? data.duration : undefined;

		/**
		 * Location information contained in the message, if the message is type "location"
		 * @type {Location}
		 */
		this.location = (() => {
			if (data.type !== MessageTypes.LOCATION) {
				return undefined;
			}
			let description;
			if (data.loc && typeof data.loc === 'string') {
				let splitted = data.loc.split('\n');
				description = {
					name: splitted[0],
					address: splitted[1],
					url: data.clientUrl,
				};
			}
			return new Location(data.lat, data.lng, description);
		})();

		/**
		 * List of vCards contained in the message.
		 * @type {Array<string>}
		 */
		this.vCards =
			data.type === MessageTypes.CONTACT_CARD_MULTI
				? data.vcardList.map((c: any) => c.vcard)
				: data.type === MessageTypes.CONTACT_CARD
				? [data.body]
				: [];

		/**
		 * Group Invite Data
		 * @type {object}
		 */
		this.inviteV4 =
			data.type === MessageTypes.GROUP_INVITE
				? {
						inviteCode: data.inviteCode,
						inviteCodeExp: data.inviteCodeExp,
						groupId: data.inviteGrp,
						groupName: data.inviteGrpName,
						fromId: '_serialized' in data.from ? data.from._serialized : data.from,
						toId: '_serialized' in data.to ? data.to._serialized : data.to,
				  }
				: undefined;

		/**
		 * @typedef {Object} Mention
		 * @property {string} server
		 * @property {string} user
		 * @property {string} _serialized
		 */

		/**
		 * Indicates the mentions in the message body.
		 * @type {Mention[]}
		 */
		this.mentionedIds = data.mentionedJidList || [];

		/**
		 * @typedef {Object} GroupMention
		 * @property {string} groupSubject The name  of the group
		 * @property {Object} groupJid The group ID
		 * @property {string} groupJid.server
		 * @property {string} groupJid.user
		 * @property {string} groupJid._serialized
		 */

		/**
		 * Indicates whether there are group mentions in the message body
		 * @type {GroupMention[]}
		 */
		this.groupMentions = data.groupMentions || [];

		/**
		 * Order ID for message type ORDER
		 * @type {string}
		 */
		this.orderId = data.orderId ? data.orderId : undefined;
		/**
		 * Order Token for message type ORDER
		 * @type {string}
		 */
		this.token = data.token ? data.token : undefined;

		/**
		 * Indicates whether the message is a Gif
		 * @type {boolean}
		 */
		this.isGif = Boolean(data.isGif);

		/**
		 * Indicates if the message will disappear after it expires
		 * @type {boolean}
		 */
		this.isEphemeral = data.isEphemeral;

		/** Title */
		if (data.title) {
			this.title = data.title;
		}

		/** Description */
		if (data.description) {
			this.description = data.description;
		}

		/** Business Owner JID */
		if (data.businessOwnerJid) {
			this.businessOwnerJid = data.businessOwnerJid;
		}

		/** Product ID */
		if (data.productId) {
			this.productId = data.productId;
		}

		/** Last edit time */
		if (data.latestEditSenderTimestampMs) {
			this.latestEditSenderTimestampMs = data.latestEditSenderTimestampMs;
		}

		/** Last edit message author */
		if (data.latestEditMsgKey) {
			this.latestEditMsgKey = data.latestEditMsgKey;
		}

		/**
		 * Links included in the message.
		 * @type {Array<{link: string, isSuspicious: boolean}>}
		 *
		 */
		this.links = data.links;

		/** Buttons */
		if (data.dynamicReplyButtons) {
			this.dynamicReplyButtons = data.dynamicReplyButtons;
		}

		/** Selected Button Id **/
		if (data.selectedButtonId) {
			this.selectedButtonId = data.selectedButtonId;
		}

		/** Selected List row Id **/
		if (data.listResponse && data.listResponse.singleSelectReply.selectedRowId) {
			this.selectedRowId = data.listResponse.singleSelectReply.selectedRowId;
		}

		if (this.type === MessageTypes.POLL_CREATION) {
			this.pollName = data.pollName;
			this.pollOptions = data.pollOptions;
			this.allowMultipleAnswers = Boolean(!data.pollSelectableOptionsCount);
			this.pollInvalidated = data.pollInvalidated;
			this.isSentCagPollCreation = data.isSentCagPollCreation;

			delete this._data.pollName;
			delete this._data.pollOptions;
			delete this._data.pollSelectableOptionsCount;
			delete this._data.pollInvalidated;
			delete this._data.isSentCagPollCreation;
		}

		return this;
	}

	_getChatId() {
		return this.fromMe ? this.to : this.from;
	}

	/**
	 * Reloads this Message object's data in-place with the latest values from WhatsApp Web.
	 * Note that the Message must still be in the web app cache for this to work, otherwise will return null.
	 * @returns {Promise<Message>}
	 */
	async reload() {
		const msg = window.Store.Msg.get(this.id._serialized);
		if (!msg) return null;
		const newData = window.WWebJS.getMessageModel(msg);

		if (!newData) return null;

		return this._patch(newData);
	}

	/**
	 * Returns message in a raw format
	 * @type {Object}
	 */
	get rawData() {
		return this._data;
	}

	/**
	 * Returns the Chat this message was sent in
	 * @returns {Promise<Chat>}
	 */
	getChat() {
		return this.client.getChatById(this._getChatId());
	}

	/**
	 * Returns the Contact this message was sent from
	 * @returns {Promise<Contact>}
	 */
	getContact() {
		return this.client.getContactById(this.author || this.from);
	}

	/**
	 * Returns the Contacts mentioned in this message
	 * @returns {Promise<Array<Contact>>}
	 */
	async getMentions() {
		return await Promise.all(
			this.mentionedIds.map(async m => await this.client.getContactById(m))
		);
	}

	/**
	 * Returns groups mentioned in this message
	 * @returns {Promise<GroupChat[]|[]>}
	 */
	async getGroupMentions() {
		return await Promise.all(
			this.groupMentions.map(
				async m => await this.client.getChatById(m.groupJid._serialized)
			)
		);
	}

	/**
	 * Returns the quoted message, if any
	 * @returns {Promise<Message>}
	 */
	async getQuotedMessage() {
		if (!this.hasQuotedMsg) return undefined;

		return this.client.getQuotedMessage(this.id._serialized);
	}

	/**
	 * Sends a message as a reply to this message. If chatId is specified, it will be sent
	 * through the specified Chat. If not, it will send the message
	 * in the same Chat as the original message was sent.
	 *
	 * @param {MessageContent} content
	 * @param {string} [chatId]
	 * @param {MessageSendOptions} [options]
	 * @returns {Promise<Message>}
	 */
	async reply(
		content: MessageContent,
		chatId: string,
		options: MessageSendOptions = {}
	) {
		if (!chatId) {
			chatId = this._getChatId();
		}

		options = {
			...options,
			quotedMessageId: this.id._serialized,
		};

		return this.client.sendMessage(chatId, content, options);
	}

	/**
	 * React to this message with an emoji
	 * @param {string} reactionEmoji - Emoji to react with. Send an empty string to remove the reaction.
	 * @return {Promise}
	 */
	async react(reactionEmoji: string) {
		return this.client.reactToMesage(this.id._serialized, reactionEmoji);
	}

	/**
	 * Forwards this message to another chat (that you chatted before, otherwise it will fail)
	 *
	 * @param {string} chat Chat model or chat ID to which the message will be forwarded
	 * @returns {Promise}
	 */
	async forward(serializedChatId: string) {
		return this.client.forwardMessageTochat(this.id._serialized, serializedChatId);
	}

	/**
	 * Downloads and returns the attatched message media
	 * @returns {Promise<MessageMedia>}
	 */
	async downloadMedia() {
		if (!this.hasMedia) {
			return undefined;
		}

		const result = await this.client.downloadMediaFromMessage(this.id._serialized);

		if (!result) return undefined;
		return result;
	}

	/**
	 * Deletes a message from the chat
	 * @param {?boolean} toEveryone If true and the message is sent by the current user or the user is an admin, will delete it for everyone in the chat.
	 */
	async delete(toEveryone?: boolean) {
		return this.client.deleteMessage(this.id._serialized, toEveryone);
	}

	/**
	 * Stars this message
	 */
	async star() {
		return this.client.starMessage(this.id._serialized);
	}

	/**
	 * Unstars this message
	 */
	async unstar() {
		return this.client.unstarMessage(this.id._serialized);
	}

	/**
	 * Pins the message (group admins can pin messages of all group members)
	 * @param {number} duration The duration in seconds the message will be pinned in a chat
	 * @returns {Promise<boolean>} Returns true if the operation completed successfully, false otherwise
	 */
	async pin(durationInSecods: number) {
		return this.client.pinMessage(this.id._serialized, durationInSecods);
	}

	/**
	 * Unpins the message (group admins can unpin messages of all group members)
	 * @returns {Promise<boolean>} Returns true if the operation completed successfully, false otherwise
	 */
	async unpin() {
		return this.client.unpinMessage(this.id._serialized);
	}

	/**
	 * Message Info
	 * @typedef {Object} MessageInfo
	 * @property {Array<{id: ContactId, t: number}>} delivery Contacts to which the message has been delivered to
	 * @property {number} deliveryRemaining Amount of people to whom the message has not been delivered to
	 * @property {Array<{id: ContactId, t: number}>} played Contacts who have listened to the voice message
	 * @property {number} playedRemaining Amount of people who have not listened to the message
	 * @property {Array<{id: ContactId, t: number}>} read Contacts who have read the message
	 * @property {number} readRemaining Amount of people who have not read the message
	 */

	/**
	 * Get information about message delivery status.
	 * May return null if the message does not exist or is not sent by you.
	 * @returns {Promise<?MessageInfo>}
	 */
	async getInfo() {
		return this.client.getMessageInfo(this.id._serialized);
	}

	/**
	 * Reaction List
	 * @typedef {Object} ReactionList
	 * @property {string} id Original emoji
	 * @property {string} aggregateEmoji aggregate emoji
	 * @property {boolean} hasReactionByMe Flag who sent the reaction
	 * @property {Array<Reaction>} senders Reaction senders, to this message
	 */

	/**
	 * Gets the reactions associated with the given message
	 * @return {Promise<ReactionList[]>}
	 */
	async getReactions() {
		if (!this.hasReaction) {
			return null;
		}

		return this.client.getReactionsFromMessage(this.id._serialized);
	}

	/**
	 * Edits the current message.
	 * @param {string} content
	 * @param {MessageEditOptions} [options] - Options used when editing the message
	 * @returns {Promise<?Message>}
	 */
	async edit(content: MessageContent, options = {}) {
		if (!this.fromMe) {
			return null;
		}

		return this.client.editMessage(this.id._serialized, content, options);
	}
}

export default Message;

export type WWebJsMessage = typeof Message;
