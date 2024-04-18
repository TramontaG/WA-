import { JSX } from 'preact/jsx-runtime';
import { useFullScreenModalBehaviour } from './behaviour';
import { Container } from './styles';
import { stopBubbling } from '../../util/DOM';

export type FullScreenModalProps = {
	children: JSX.Element;
	isOpen: boolean;
	closeModal: () => void;
};

export const FullScreenModal = (props: FullScreenModalProps) => {
	const { isOpen } = useFullScreenModalBehaviour(props);

	if (!isOpen) {
		return null;
	}
	return <Container onClick={props.closeModal}>{props.children}</Container>;
};
