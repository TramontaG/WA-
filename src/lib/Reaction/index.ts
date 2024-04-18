import { Client } from '../Client';
import { MessageId } from '../Message/models';

/**
 * Represents a Reaction on WhatsApp
 * @extends {Base}
 */
export default class Reaction {
	client: Client;
	id!: MessageId;
	orphan!: number;
	orphanReason?: string;
	timestamp!: number;
	reaction!: string;
	read!: boolean;
	msgId!: MessageId;
	senderId!: string;
	ack?: number;

	constructor(client: Client, data: any) {
		this.client = client;
		if (data) this._patch(data);
	}

	_patch(data: any) {
		/**
		 * Reaction ID
		 * @type {object}
		 */
		this.id = data.msgKey;
		/**
		 * Orphan
		 * @type {number}
		 */
		this.orphan = data.orphan;
		/**
		 * Orphan reason
		 * @type {?string}
		 */
		this.orphanReason = data.orphanReason;
		/**
		 * Unix timestamp for when the reaction was created
		 * @type {number}
		 */
		this.timestamp = data.timestamp;
		/**
		 * Reaction
		 * @type {string}
		 */
		this.reaction = data.reactionText;
		/**
		 * Read
		 * @type {boolean}
		 */
		this.read = data.read;
		/**
		 * Message ID
		 * @type {object}
		 */
		this.msgId = data.parentMsgKey;
		/**
		 * Sender ID
		 * @type {string}
		 */
		this.senderId = data.senderUserJid;
		/**
		 * ACK
		 * @type {?number}
		 */
		this.ack = data.ack;
	}
}
