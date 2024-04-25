import LoadingRing from '../../../../components/LoadingRing';
import { Render } from '../../../../components/Render';
import { stopBubbling } from '../../../../util/DOM';
import { Container } from '../../styles';
import { useMediaPreviewBehavior } from './behaviour';
import { CaptionContainer, Image, ImageContainer, Multimidia } from './styles';

export type MediaPreviewProps = {
	id: string;
};

export const MediaPreview = ({ id }: MediaPreviewProps) => {
	const { media, srcString, isImage, caption } = useMediaPreviewBehavior({ id });

	if (!media) {
		return <LoadingRing size={'12rem'} />;
	}

	return (
		<ImageContainer>
			<Render when={isImage}>
				<Image src={srcString} />
			</Render>
			<Render when={!isImage}>
				<Multimidia controls>
					<source src={srcString} />
				</Multimidia>
			</Render>
			<Render when={!!caption}>
				<CaptionContainer>{caption}</CaptionContainer>
			</Render>
		</ImageContainer>
	);
};
