import { ButtonPrimitiveStyle } from '../../styles';
import { useFeatureToggleBehaviour } from './behaviour';

export const FeatureToggle = () => {
	const { openModal } = useFeatureToggleBehaviour();

	return (
		<>
			<ButtonPrimitiveStyle onClick={openModal}>
				<h1>Painel de funções</h1>
			</ButtonPrimitiveStyle>
		</>
	);
};
