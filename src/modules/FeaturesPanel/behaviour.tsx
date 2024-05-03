import { AppContextType, AppContext, Features } from '../../contexts/App';

export const useFeaturesPanelBehaviour = () => {
	const { value: appContext, setValue: setAppContext } = AppContext.useContext();

	const toggleFeature = (featureName: keyof Features) => (value: boolean) => {
		setAppContext({
			features: {
				[featureName]: value,
			}
		});
		localStorage.setItem(
			'WA++Features',
			JSON.stringify({ ...appContext.features, [featureName]: value })
		);
	};

	const featureIsActive = (featureName: keyof Features) => {
		return appContext.features[featureName];
	};

	return {
		toggleFeature,
		featureIsActive,
	};
};
