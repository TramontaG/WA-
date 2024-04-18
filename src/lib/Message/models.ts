import { Contact, ContactId } from '../Contact/models';
import Reaction from '../Reaction';

/** ID that represents a message */
export interface MessageId {
	fromMe: boolean;
	remote: string;
	id: string;
	_serialized: string;
}

export enum MessageAck {
	ACK_ERROR = -1,
	ACK_PENDING = 0,
	ACK_SERVER = 1,
	ACK_DEVICE = 2,
	ACK_READ = 3,
	ACK_PLAYED = 4,
}

export enum MessageTypes {
	TEXT = 'chat',
	AUDIO = 'audio',
	VOICE = 'ptt',
	IMAGE = 'image',
	VIDEO = 'video',
	DOCUMENT = 'document',
	STICKER = 'sticker',
	LOCATION = 'location',
	CONTACT_CARD = 'vcard',
	CONTACT_CARD_MULTI = 'multi_vcard',
	REVOKED = 'revoked',
	ORDER = 'order',
	PRODUCT = 'product',
	PAYMENT = 'payment',
	UNKNOWN = 'unknown',
	GROUP_INVITE = 'groups_v4_invite',
	LIST = 'list',
	LIST_RESPONSE = 'list_response',
	BUTTONS_RESPONSE = 'buttons_response',
	BROADCAST_NOTIFICATION = 'broadcast_notification',
	CALL_LOG = 'call_log',
	CIPHERTEXT = 'ciphertext',
	DEBUG = 'debug',
	E2E_NOTIFICATION = 'e2e_notification',
	GP2 = 'gp2',
	GROUP_NOTIFICATION = 'group_notification',
	HSM = 'hsm',
	INTERACTIVE = 'interactive',
	NATIVE_FLOW = 'native_flow',
	NOTIFICATION = 'notification',
	NOTIFICATION_TEMPLATE = 'notification_template',
	OVERSIZED = 'oversized',
	PROTOCOL = 'protocol',
	REACTION = 'reaction',
	TEMPLATE_BUTTON_REPLY = 'template_button_reply',
	POLL_CREATION = 'poll_creation',
}

export type InviteV4Data = {
	inviteCode: string;
	inviteCodeExp: number;
	groupId: string;
	groupName?: string;
	fromId: string;
	toId: string;
};

export interface ChatId {
	/**
	 * Whatsapp server domain
	 * @example `c.us`
	 */
	server: string;
	/**
	 * User whatsapp number
	 * @example `554199999999`
	 */
	user: string;
	/**
	 * Serialized id
	 * @example `554199999999@c.us`
	 */
	_serialized: string;
}

export type MessageInfo = {
	delivery: Array<{ id: ContactId; t: number }>;
	deliveryRemaining: number;
	played: Array<{ id: ContactId; t: number }>;
	playedRemaining: number;
	read: Array<{ id: ContactId; t: number }>;
	readRemaining: number;
};

export type ReactionList = {
	id: string;
	aggregateEmoji: string;
	hasReactionByMe: boolean;
	senders: Array<Reaction>;
};

/** Options for editing a message */
export interface MessageEditOptions {
	/** Show links preview. Has no effect on multi-device accounts. */
	linkPreview?: boolean;
	/** Contacts that are being mentioned in the message */
	mentions?: Contact[];
	/** Extra options */
	extra?: any;
}
