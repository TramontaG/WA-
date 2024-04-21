import { createPortal } from 'preact/compat';
import { useChatToolsBehaviour } from './behaviour';
import { WhatsappPlusPlusButton } from '../../components/Whatsapp++Button';
import { AppContext } from '../../contexts/App';

export const ChatTools = () => {
	useChatToolsBehaviour();
	const root = document.querySelector('footer > div');
	const appContext = AppContext.useContext().value;

	if (!root) {
		return null;
	}

	const onClick = () => console.log(appContext);

	return createPortal(<WhatsappPlusPlusButton onClick={onClick} />, root);
};
