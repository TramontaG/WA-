import { useState } from 'preact/hooks';
import { elementGetsVisible } from '../../util/DOM';
import { AppContext } from '../../contexts/App';
import Chat from '../../lib/Chat/GroupChat';
import { CommonSelectors, useDomObserver } from '../../hooks/useDomObserver';

export const useChatToolsBehaviour = () => {
	const [currentChat, setCurrentChat] = useState<Chat>({
		id: {
			_serialized: '',
		},
	} as Chat);
	const { value: appContext, setValue: setAppContext } = AppContext.useContext();
	const Client = appContext.client;
	const [rootElement, setRootElement] = useState<Element | null>(null);
	const [loading, setLoading] = useState(true);
	const [toolbarOpen, setToolbarOpen] = useState(false);

	useDomObserver(CommonSelectors.chatWindow, async () => {
		setToolbarOpen(false);
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

		setLoading(false);
	});

	const getCurrentChat = async () => {
		const someMessageId = (await elementGetsVisible('[data-id]')).getAttribute(
			'data-id'
		)!;
		const sampleMessageObject = await Client!.getMessageById(someMessageId);
		return sampleMessageObject!.getChat();
	};

	const onClickButton = async () => {
		if (!loading) {
			setToolbarOpen(open => !open);
		}
	};

	const closeToolbar = () => {
		setToolbarOpen(false);
	};

	return {
		onClickButton,
		closeToolbar,
		rootElement,
		loading,
		toolbarOpen,
	};
};
