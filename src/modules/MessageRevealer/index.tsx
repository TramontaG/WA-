import { FullScreenModal } from '../../components/FullScreenModal';
import LoadingRing from '../../components/LoadingRing';
import { Render } from '../../components/Render';
import { useMessageRevalerLogic } from './behaviour';
import { MediaPreview } from './components/MessagePreview';
import { CaptionContainer, Container, ImageContainer } from './styles';

export const MessageRevealer = () => {
	const { loading, media, messageType, closeModal, modalOpen, messageObj } =
		useMessageRevalerLogic();

	return (
		<FullScreenModal isOpen={modalOpen} closeModal={closeModal}>
			<>
				<Render when={loading}>
					<LoadingRing size={'12rem'} />
				</Render>
				<Render when={!loading}>
					<Container>
						<ImageContainer>
							<MediaPreview messageType={messageType!} media={media!} />
						</ImageContainer>
						<CaptionContainer>
							<span>{messageObj.body}</span>
						</CaptionContainer>
					</Container>
				</Render>
			</>
		</FullScreenModal>
	);
};
