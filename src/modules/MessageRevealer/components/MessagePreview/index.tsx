import MessageMedia from '../../../../lib/Media';
import { MessageTypes } from '../../../../lib/Message/models';
import { Image, Multimidia } from './styles';

type MediaPreviewProps = {
	messageType: MessageTypes;
	media: MessageMedia;
};

export const MediaPreview = ({ media, messageType }: MediaPreviewProps) => {
	const srcString = `data:${media.mimetype};base64,${media.data}`;
	if (messageType === 'image') {
		return <Image src={srcString} />;
	}
	if (messageType === 'video' || messageType === 'audio' || messageType === 'ptt') {
		return (
			<Multimidia controls>
				<source src={srcString} />
			</Multimidia>
		);
	}

	return null;
};
