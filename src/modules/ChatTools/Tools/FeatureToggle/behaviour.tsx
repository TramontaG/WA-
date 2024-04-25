import { useState } from 'preact/hooks';

export const useFeatureToggleBehaviour = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return {
		modalOpen,
		openModal,
		closeModal,
	};
};
