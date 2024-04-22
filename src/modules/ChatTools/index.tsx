import { createPortal } from 'preact/compat';
import { useChatToolsBehaviour } from './behaviour';
import { WhatsappPlusPlusButton } from '../../components/Whatsapp++Button';
import LoadingRing from '../../components/LoadingRing';
import { Container } from './styles';
import { Render } from '../../components/Render';

export const ChatTools = () => {
	const { onClickButton, rootElement, loading } = useChatToolsBehaviour();

	if (!rootElement) {
		return <></>;
	}

	return createPortal(
		<Container>
			<Render when={loading}>
				<LoadingRing size={'2rem'} />
			</Render>
			<Render when={!loading}>
				<WhatsappPlusPlusButton onClick={onClickButton} />
			</Render>
		</Container>,
		rootElement
	);
};
