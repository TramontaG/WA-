import { AppContext } from '../../contexts/App';
import { AlertBody, AlertContainer, IconContainer } from './styles';
import { useAlertBehavior } from './behaviour';
import { Render } from '../Render';

export const AlertComponent = () => {
	const { alert } = AppContext.useContext().value;
	const { Icon, iconColor, shown, render } = useAlertBehavior();

	return (
		<Render when={render}>
			<AlertContainer shown={shown}>
				<AlertBody>
					<IconContainer color={iconColor}>
						<Icon width={'3rem'} height={'3rem'} />
					</IconContainer>
					<h1>{alert.message}</h1>
				</AlertBody>
			</AlertContainer>
		</Render>
	);
};
