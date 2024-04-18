import { FullScreenModal } from '../../components/FullScreenModal';
import { Render } from '../../components/Render';
import { useMessageRevalerLogic } from './behaviour';
import { MediaPreview } from './components/MessagePreview';
import { Container } from './styles';

export const MessageRevealer = () => {
	const { currentMessageId, loading, media, messageType, closeModal, modalOpen } =
		useMessageRevalerLogic();

	return (
		<FullScreenModal isOpen={modalOpen} closeModal={closeModal}>
			<Container>
				<>
					<Render when={loading}>
						<h1>Loading...</h1>
					</Render>

					<Render when={!loading}>
						<MediaPreview messageType={messageType!} media={media!} />
					</Render>
				</>
			</Container>
		</FullScreenModal>
	);
};
