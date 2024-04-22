import { WWebJsMessage } from '../lib/Message';
import { RawMessage } from './Message';

export {};

declare global {
	interface Window {
		Store: Store;
		WWebJS: WWebJS;
	}

	interface WWebJs {
		Message: WWebJsMessage;
		getMessageModel: (msg: RawMessage) => WWebJs.Message;
	}

	// [TODO]: Better types
	interface Store {
		Msg: StoreMsg;
		QuotedMsg: StoreQuotedMsg;
		WidFactory: StoreWidFactory;
		Chat: StoreChat;
		sendReactionToMsg: StoreSendReactionToMsg;
		getMsgInfo: StoreGetMessageInfo;
		DownloadManager: StoreDownloadManager;
		MsgActionChecks: StoreMsgActionChecks;
		Cmd: StoreCmd;
		Reactions: StoreReactions;
		ConversationMsgs: StoreConversationMsgs;
		Label: StoreLabel;
		Conn: StoreConn;
	}
}
