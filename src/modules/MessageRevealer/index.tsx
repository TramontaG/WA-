import { stopBubbling } from '../../util/DOM';
import { useMessageRevalerLogic } from './behaviour';
import { MediaPreview } from './components/MessagePreview';
import { Container } from './styles';

export const MessageRevealerComponent = ({
	messageId,
}: {
	messageId: string | null;
}) => {
	if (!messageId) {
		return null;
	}

	return (
		<Container onClick={stopBubbling}>
			<MediaPreview id={messageId} />
		</Container>
	);
};

export const MessageRevealer = () => {
	useMessageRevalerLogic();

	return null;
};
