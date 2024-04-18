import MessageMedia from '../../../../lib/Media';
import { MessageTypes } from '../../../../lib/Message/models';
import { Image } from './styles';

type MediaPreviewProps = {
	messageType: MessageTypes;
	media: MessageMedia;
};

export const MediaPreview = ({ media, messageType }: MediaPreviewProps) => {
	if (messageType === 'image') {
		return <Image src={`data:image/png;base64,${media.data}`} />;
	}

	return null;
};
