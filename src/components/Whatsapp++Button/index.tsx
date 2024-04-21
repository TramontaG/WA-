import { PlusIcon } from '../../assets/icons/Plus';
import { WhatsappIcon } from '../../assets/icons/Whatsapp';
import {
	Button,
	FirstPlusContainer,
	IconContainer,
	SecondPlusContainer,
	WhatsappIconContainer,
} from './styles';

export type WhatsAppPlusPlusButton = {
	onClick: (ev: Event) => any;
};

export const WhatsappPlusPlusButton = ({ onClick }: WhatsAppPlusPlusButton) => {
	return (
		<Button onClick={onClick}>
			<IconContainer>
				<WhatsappIconContainer>
					<WhatsappIcon width={'1.7rem'} height={'1.7rem'} />
				</WhatsappIconContainer>
				<FirstPlusContainer>
					<PlusIcon width={'1.7rem'} height={'1.7rem'} />
				</FirstPlusContainer>
				<SecondPlusContainer>
					<PlusIcon width={'1.7rem'} height={'1.7rem'} />
				</SecondPlusContainer>
			</IconContainer>
		</Button>
	);
};
