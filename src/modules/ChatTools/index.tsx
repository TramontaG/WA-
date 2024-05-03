import { createPortal } from 'preact/compat';
import { useChatToolsBehaviour } from './behaviour';
import { WhatsappPlusPlusButton } from '../../components/Whatsapp++Button';
import LoadingRing from '../../components/LoadingRing';
import { Container, ToolBarContainer } from './styles';
import { Render } from '../../components/Render';
import { ForwardMessage } from './Tools/ForwardMessage';
import { FeatureToggle } from './Tools/FeatureToggle';

export const ChatTools = () => {
	const { onClickButton, rootElement, loading, toolbarOpen, closeToolbar } =
		useChatToolsBehaviour();

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
			<ToolBarContainer open={toolbarOpen}>
				<FeatureToggle closeToolbar={closeToolbar} />
			</ToolBarContainer>
		</Container>,
		rootElement
	);
};
