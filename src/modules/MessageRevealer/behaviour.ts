import { useCallback, useEffect, useState } from 'preact/hooks';
import MessageMedia from '../../lib/Media';
import { MessageTypes } from '../../lib/Message/models';
import Message from '../../lib/Message';
import { CommonSelectors, useDomObserver } from '../../hooks/useDomObserver';
import { AppContext } from '../../contexts/App';
import { MessageRevealer, MessageRevealerComponent } from '.';
import { useModal } from '../../hooks/useModal';

export const useMessageRevalerLogic = () => {
	const [, setCurrentMessageId] = useState<string | null>(null);
	const { client } = AppContext.useContext().value;
	const modal = useModal({
		afterClose: () => setCurrentMessageId(null),
	});

	useDomObserver(
		CommonSelectors.chatWindow,
		async () => {
			const allMesasgesInDom = [...document.querySelectorAll('[data-id]')];
			const allMessageObj = await Promise.all(
				allMesasgesInDom.map(async node => {
					const id = node.getAttribute('data-id')!;
					return client!.getMessageById(id)!;
				})
			);

			const allViewOnceMsgIds = allMessageObj
				.filter(msg => msg && msg._data.isViewOnce)
				.map(msg => msg!.id._serialized);

			allViewOnceMsgIds.forEach(id => {
				const msgContainer = document.querySelector(`[data-id="${id}"]`)!;
				msgContainer.removeEventListener('click', onClickMessage);
				msgContainer.addEventListener('click', onClickMessage);
			});
		},
		{
			subtree: true,
			childList: true,
		}
	);

	const getMessageId = (ev: Event) => {
		let target = ev.target as HTMLElement;
		while (!target.getAttribute('data-id')) {
			target = target.parentElement!;
		}
		return target.getAttribute('data-id')!;
	};

	const onClickMessage = useCallback(async (ev: Event) => {
		const messageId = getMessageId(ev);
		modal.openModal(MessageRevealerComponent, {
			messageId: messageId,
		});
	}, []);

	modal.useModalEffect(modal => {
		if (!modal.open) {
			setCurrentMessageId(null);
		}
	});
};
