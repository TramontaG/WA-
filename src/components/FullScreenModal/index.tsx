import { JSX } from 'preact/jsx-runtime';
import { useFullScreenModalBehaviour } from './behaviour';
import { Container } from './styles';
import { stopBubbling } from '../../util/DOM';
import { cloneElement } from 'preact';

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

	const Children = cloneElement(props.children, {
		onclick: (ev: Event) => ev.stopPropagation(),
	});

	return <Container onClick={props.closeModal}>{Children}</Container>;
};
