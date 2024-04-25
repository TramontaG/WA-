import { AppContext } from '../../contexts/App';
import { useModal } from '../../hooks/useModal';

export const useFullScreenModalBehaviour = () => {
	const { value: context, setValue: setContext } = AppContext.useContext();
	const modal = useModal({});

	const closeModal = () => {
		modal.closeModal();
	};

	const isOpen = context.fullScreenModal.open;

	const actualCloseModal = (ev: Event) => {
		ev.stopPropagation();
		closeModal();
	};

	return {
		isOpen,
		closeModal: actualCloseModal,
		Children: context.fullScreenModal.children,
		childrenProps: context.fullScreenModal.childrenProps,
	};
};
