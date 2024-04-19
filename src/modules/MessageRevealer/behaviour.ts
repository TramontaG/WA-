import { useEffect, useState } from 'preact/hooks';
import WaContext from '../../contexts/Wa';
import MessageMedia from '../../lib/Media';
import { MessageTypes } from '../../lib/Message/models';

export const useMessageRevalerLogic = () => {
	const [currentMessageId, setCurrentMessageId] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [media, setMedia] = useState<MessageMedia | null>(null);
	const [messageType, setMessageType] = useState<MessageTypes | null>(null);
	const [modalOpen, setModalOpen] = useState(false);
	const { value: Wa } = WaContext.useContext();

	const getMessageId = (ev: Event) => {
		let target = ev.target as HTMLElement;
		while (!target.getAttribute('data-id')) {
			target = target.parentElement!;
		}
		return target.getAttribute('data-id')!;
	};

	const onClickMessage = async (ev: Event) => {
		const messageId = getMessageId(ev);
		setCurrentMessageId(messageId);
	};

	useEffect(() => {
		if (!Wa.Client) {
			return;
		} else {
			setupMessageRevealer(onClickMessage);
		}
	}, [Wa]);

	const downloadAndShowMedia = async () => {
		if (currentMessageId === null) {
			return;
		}
		const message = await Wa.Client.getMessageById(currentMessageId);

		if (!message?.hasMedia || !message._data.isViewOnce) {
			return;
		}

		if (!!currentMessageId) {
			setModalOpen(true);
			setLoading(true);
		}

		const media = await Wa.Client.downloadMediaFromMessage(currentMessageId);
		setMedia(media ?? null);
		setLoading(false);
		setMessageType(message.type);
	};

	useEffect(() => {
		downloadAndShowMedia();
	}, [currentMessageId]);

	const closeModal = () => {
		setModalOpen(false);
		setCurrentMessageId(null);
	};

	return {
		currentMessageId,
		media,
		messageType,
		loading,
		closeModal,
		modalOpen,
	};
};

const setupMessageRevealer = (onClickMessage: (ev: Event) => any) => {
	const addMediaToMessage = () => {
		const allMesasgesInDom = document.querySelectorAll('[data-id]');
		allMesasgesInDom.forEach(message =>
			message.removeEventListener('click', onClickMessage)
		);
		allMesasgesInDom.forEach(message => {
			message.addEventListener('click', onClickMessage);
		});
	};

	const startMainObserver = () => {
		const mainDiv = document.getElementById('main');
		if (!mainDiv) {
			return;
		}

		MainDivObserver.observe(mainDiv, {
			subtree: true,
			childList: true,
			attributes: true,
			attributeFilter: ['data-id'],
		});
	};

	const AppObserver = new MutationObserver(startMainObserver);
	const MainDivObserver = new MutationObserver(addMediaToMessage);

	AppObserver.observe(document.getElementById('app')!, {
		subtree: true,
		attributes: true,
		childList: true,
	});
};
