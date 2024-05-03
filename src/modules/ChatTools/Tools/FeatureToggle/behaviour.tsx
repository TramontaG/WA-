import { useModal } from '../../../../hooks/useModal';
import { FeatureToggleProps } from '.';
import { FeaturesPanel } from '../../../FeaturesPanel';

export const useFeatureToggleBehaviour = (props: FeatureToggleProps) => {
	const modal = useModal({
		beforeOpen: props.closeToolbar,
	});
	const onClick = () => {
		modal.openModal(FeaturesPanel);
	};

	return {
		onClick,
	};
};
