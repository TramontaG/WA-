import { Client } from '../Client';
import { MessageContent, MessageSendOptions } from '../Client/models';
import Message from '../Message';
import { ChatId } from '../Message/models';
import { SearchMessageOptions } from './models';

export default class Chat {
	/** Client instance */
	client: Client;
	/** Indicates if the Chat is archived */
	archived!: boolean;
	/** ID that represents the chat */
	id!: ChatId;
	/** Indicates if the Chat is a Group Chat */
	isGroup!: boolean;
	/** Indicates if the Chat is readonly */
	isReadOnly!: boolean;
	/** Indicates if the Chat is muted */
	isMuted!: boolean;
	/** Unix timestamp for when the mute expires */
	muteExpiration!: number;
	/** Title of the chat */
	name!: string;
	/** Unix timestamp for when the last activity occurred */
	timestamp!: number;
	/** Amount of messages unread */
	unreadCount!: number;
	/** Last message fo chat */
	lastMessage?: Message;
	/** Indicates if the Chat is pinned */
	pinned!: boolean;
	/** Last message from chat */

	constructor(client: Client, data: Record<string, any>) {
		this.client = client;
		if (data) this._patch(data);
	}

	_patch(data: Record<string, any>) {
		/**
		 * ID that represents the chat
		 * @type {object}
		 */
		this.id = data.id;

		/**
		 * Title of the chat
		 * @type {string}
		 */
		this.name = data.formattedTitle;

		/**
		 * Indicates if the Chat is a Group Chat
		 * @type {boolean}
		 */
		this.isGroup = data.isGroup;

		/**
		 * Indicates if the Chat is readonly
		 * @type {boolean}
		 */
		this.isReadOnly = data.isReadOnly;

		/**
		 * Amount of messages unread
		 * @type {number}
		 */
		this.unreadCount = data.unreadCount;

		/**
		 * Unix timestamp for when the last activity occurred
		 * @type {number}
		 */
		this.timestamp = data.t;

		/**
		 * Indicates if the Chat is archived
		 * @type {boolean}
		 */
		this.archived = data.archive;

		/**
		 * Indicates if the Chat is pinned
		 * @type {boolean}
		 */
		this.pinned = !!data.pin;

		/**
		 * Indicates if the chat is muted or not
		 * @type {boolean}
		 */
		this.isMuted = data.isMuted;

		/**
		 * Unix timestamp for when the mute expires
		 * @type {number}
		 */
		this.muteExpiration = data.muteExpiration;

		/**
		 * Last message fo chat
		 * @type {Message}
		 */
		this.lastMessage = data.lastMessage
			? new Message(this.client, data.lastMessage)
			: undefined;
	}

	/**
	 * Send a message to this chat
	 * @param {string|MessageMedia|Location} content
	 * @param {MessageSendOptions} [options]
	 * @returns {Promise<Message>} Message that was just sent
	 */
	async sendMessage(content: MessageContent, options: MessageSendOptions) {
		return this.client.sendMessage(this.id._serialized, content, options);
	}

	/**
	 * Set the message as seen
	 * @returns {Promise<Boolean>} result
	 */
	async sendSeen() {
		return this.client.sendSeen(this.id._serialized);
	}

	/**
	 * Clears all messages from the chat
	 * @returns {Promise<Boolean>} result
	 */
	async clearMessages() {
		return this.client.clearChatMessages(this.id._serialized);
	}

	/**
	 * Deletes the chat
	 * @returns {Promise<Boolean>} result
	 */
	async delete() {
		return this.client.deleteChat(this.id._serialized);
	}

	/**
	 * Archives this chat
	 */
	async archive() {
		return this.client.archiveChat(this.id._serialized);
	}

	/**
	 * un-archives this chat
	 */
	async unarchive() {
		return this.client.unarchiveChat(this.id._serialized);
	}

	/**
	 * Pins this chat
	 * @returns {Promise<boolean>} New pin state. Could be false if the max number of pinned chats was reached.
	 */
	async pin() {
		return this.client.pinChat(this.id._serialized);
	}

	/**
	 * Unpins this chat
	 * @returns {Promise<boolean>} New pin state
	 */
	async unpin() {
		return this.client.unpinChat(this.id._serialized);
	}

	/**
	 * Mutes this chat forever, unless a date is specified
	 * @param {?Date} unmuteDate Date at which the Chat will be unmuted, leave as is to mute forever
	 */
	async mute(unmuteDate?: Date) {
		return this.client.muteChat(this.id._serialized, unmuteDate);
	}

	/**
	 * Unmutes this chat
	 */
	async unmute() {
		return this.client.unmuteChat(this.id._serialized);
	}

	/**
	 * Mark this chat as unread
	 */
	async markUnread() {
		return this.client.markChatUnread(this.id._serialized);
	}

	/**
	 * Loads chat messages, sorted from earliest to latest.
	 * @param {Object} searchOptions Options for searching messages. Right now only limit and fromMe is supported.
	 * @param {Number} [searchOptions.limit] The amount of messages to return. If no limit is specified, the available messages will be returned. Note that the actual number of returned messages may be smaller if there aren't enough messages in the conversation. Set this to Infinity to load all messages.
	 * @param {Boolean} [searchOptions.fromMe] Return only messages from the bot number or vise versa. To get all messages, leave the option undefined.
	 * @returns {Promise<Array<Message>>}
	 */
	async fetchMessages(searchOptions?: SearchMessageOptions) {
		return this.client.fetchMessagesFromChat(this.id._serialized, searchOptions);
	}

	/**
	 * Simulate typing in chat. This will last for 25 seconds.
	 */
	async sendStateTyping() {
		return this.client.sendTypingStateToChat(this.id._serialized);
	}

	/**
	 * Simulate recording audio in chat. This will last for 25 seconds.
	 */
	async sendStateRecording() {
		return this.client.sendRecordingAudioStateToChat(this.id._serialized);
	}

	/**
	 * Stops typing or recording in chat immediately.
	 */
	async clearState() {
		return this.client.clearChatState(this.id._serialized);
	}

	/**
	 * Returns the Contact that corresponds to this Chat.
	 * @returns {Promise<Contact>}
	 */
	async getContact() {
		return await this.client.getContactById(this.id._serialized);
	}

	/**
	 * Returns array of all Labels assigned to this Chat
	 * @returns {Promise<Array<Label>>}
	 */
	async getLabels() {
		return this.client.getChatLabels(this.id._serialized);
	}

	/**
	 * Add or remove labels to this Chat
	 * @param {Array<number|string>} labelIds
	 * @returns {Promise<void>}
	 */
	async changeLabels(labelIds: (string | number)[]) {
		return this.client.addOrRemoveLabelsFromChat(labelIds, [this.id._serialized]);
	}
}
