import { FullScreenModalProps } from '.';

export const useFullScreenModalBehaviour = ({
	closeModal,
	isOpen,
}: FullScreenModalProps) => {
	const actualCloseModal = (ev: Event) => {
		ev.stopPropagation();
		closeModal();
	};

	return {
		isOpen,
		closeModal: actualCloseModal,
	};
};
