import { useFullScreenModalBehaviour } from './behaviour';
import { Container } from './styles';

export const FullScreenModal = () => {
	const { isOpen, closeModal, Children, childrenProps } =
		useFullScreenModalBehaviour();

	if (!isOpen) {
		return null;
	}

	return (
		<Container onClick={closeModal}>
			<Children {...childrenProps} />
		</Container>
	);
};
