import { useEffect, useLayoutEffect, useState } from 'preact/hooks';
import { elementGetsVisible } from '../../util/DOM';
import WaContext from '../../contexts/Wa';
import { AppContext } from '../../contexts/App';
import Chat from '../../lib/Chat/GroupChat';
import { useDomObserver } from '../../hooks/useDomObserver';

let ChatObserver: MutationObserver | null = null;

const setupChatObserver = async (onChatLoads: () => any) => {
	const chatContainer = await elementGetsVisible('#app > div > div > :nth-child(4)');

	ChatObserver = new MutationObserver(onChatLoads);
	ChatObserver.observe(chatContainer!, {
		subtree: true,
		childList: true,
	});
};

const clearObserver = () => {
	ChatObserver?.disconnect();
};

export const useChatToolsBehaviour = () => {
	const [currentChat, setCurrentChat] = useState<Chat>({
		id: {
			_serialized: '',
		},
	} as Chat);
	const { Client } = WaContext.useContext().value;
	const { value: app, setValue: setAppContext } = AppContext.useContext();
	const [rootElement, setRootElement] = useState<Element | null>(null);
	const [loading, setLoading] = useState(true);

	useDomObserver('#app > div > div > :nth-child(4)', async () => {
		const newRootElement = document.querySelector('footer > div');
		if (currentChat?.id._serialized === newRootElement?.getAttribute('chat-id')) {
			return;
		}

		setRootElement(newRootElement);
		setLoading(true);

		const newCurrentChat = await getCurrentChat();
		setCurrentChat(newCurrentChat);
		setAppContext({
			openChatId: newCurrentChat.id._serialized,
		});
		newRootElement!.setAttribute('chat-id', newCurrentChat.id._serialized);
		console.log('Ran fully');

		setLoading(false);
	});

	const getCurrentChat = async () => {
		const someMessageId = (await elementGetsVisible('[data-id]')).getAttribute(
			'data-id'
		)!;
		const sampleMessageObject = await Client.getMessageById(someMessageId);
		return sampleMessageObject!.getChat();
	};

	const onClickButton = async () => {
		console.log(app);
	};

	return {
		onClickButton,
		rootElement,
		loading,
		currentChat,
	};
};
