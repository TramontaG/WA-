import { useEffect, useState } from 'preact/hooks';
import { elementGetsVisible } from '../../util/DOM';
import WaContext from '../../contexts/Wa';
import { AppContext } from '../../contexts/App';

const setupChatTools = async (onChatLoads: () => any) => {
	const chatContainer = await elementGetsVisible('#app > div > div > :nth-child(4)');

	const chatObserver = new MutationObserver(onChatLoads);
	chatObserver.observe(chatContainer!, {
		subtree: true,
		attributes: true,
		childList: true,
	});
};

export const useChatToolsBehaviour = () => {
	const [messageId, setMessageId] = useState<string | null>(null);
	const { Client } = WaContext.useContext().value;
	const { value: app, setValue: setAppContext } = AppContext.useContext();

	const onChatLoads = async () => {
		const someMessageId = (await elementGetsVisible('[data-id]')).getAttribute(
			'data-id'
		)!;
		setMessageId(someMessageId);
	};

	const getChatInfo = async () => {
		if (!messageId) {
			return;
		}

		const chatId = await Client.getMessageById(messageId).then(
			message => message?.id.remote
		);
		setAppContext({
			openChat: chatId,
		});
	};

	useEffect(() => {
		getChatInfo();
	}, [messageId]);

	useEffect(() => {
		if (Client) {
			setupChatTools(onChatLoads);
		}
	}, [Client]);
};
