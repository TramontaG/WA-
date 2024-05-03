import { ButtonPrimitiveStyle } from '../../styles';
import { useFeatureToggleBehaviour } from './behaviour';

export type FeatureToggleProps = {
	closeToolbar: () => any;
};

export const FeatureToggle = (props: FeatureToggleProps) => {
	const { onClick } = useFeatureToggleBehaviour(props);

	return (
		<>
			<ButtonPrimitiveStyle onClick={onClick}>
				<h1>Painel de funções</h1>
			</ButtonPrimitiveStyle>
		</>
	);
};
