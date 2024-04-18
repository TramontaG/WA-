import MessageMedia from '../Media';

export type MessageContent = string | MessageMedia | Location;
// | Poll
// | Contact
// | Array<Contact>
// | Buttons
// | List;

export type GroupMention = {
	subject: string;
	id: string;
};

export type MessageSendOptions = Partial<{
	linkPreview: boolean;
	sendAudioAsVoice: boolean;
	sendVideoAsGif: boolean;
	sendMediaAsSticker: boolean;
	sendMediaAsDocument: boolean;
	isViewOnce: boolean;
	parseVCards: boolean;
	caption: string;
	quotedMessageId: string;
	groupMention: GroupMention[];
	mentions: string[];
	sendSeen: boolean;
	stickerAuthor: string;
	stickerName: string;
	stickerCategories: string[];
	messageMedia: MessageMedia;
}>;
