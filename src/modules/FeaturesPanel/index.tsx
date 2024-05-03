import { CheckBox } from '../../components/CheckBox';
import { stopBubbling } from '../../util/DOM';
import { useFeaturesPanelBehaviour } from './behaviour';
import { Container } from './styles';

export const FeaturesPanel = () => {
	const { featureIsActive, toggleFeature } = useFeaturesPanelBehaviour();

	return (
		<Container onClick={stopBubbling}>
			<CheckBox
				checked={featureIsActive('MessageReveal')}
				onChangeValue={toggleFeature('MessageReveal')}
				label="Message Reveler"
			/>
		</Container>
	);
};
