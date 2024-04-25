import { useEffect, useState } from 'preact/hooks';
import { MediaPreviewProps } from '.';
import { MessageTypes } from '../../../../lib/Message/models';
import WaContext from '../../../../contexts/Wa';
import { useAlert } from '../../../../components/Alert/behaviour';

export const useMediaPreviewBehavior = ({ id }: MediaPreviewProps) => {
	const [media, setMedia] = useState<{
		type: MessageTypes;
		mimetype: string;
		data: string;
		caption: string | null;
	} | null>(null);

	const { Client } = WaContext.useContext().value;
	const { showFail } = useAlert();

	const fetchMedia = async () => {
		try {
			const msg = await Client.getMessageById(id);
			const media = await msg?.downloadMedia();
			if (!media) {
				return showFail(
					'Falha ao obter midia da mensagem. Tente novamente mais tarde'
				);
			}

			setMedia({
				type: msg!.type,
				data: media.data,
				mimetype: media.mimetype,
				caption: msg?.body ?? null,
			});
		} catch (e) {
			showFail(`${e}`);
		}
	};

	useEffect(() => {
		fetchMedia();
	}, [id]);

	return {
		media,
		srcString: `data:${media?.mimetype};base64,${media?.data}`,
		isImage: media?.type === 'image',
		caption: media?.caption,
	};
};
