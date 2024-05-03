import { EffectCallback, Inputs, useEffect } from 'preact/hooks';
import { AppContext } from '../contexts/App';

export const useWaLoadEffect = (cb: EffectCallback, dependencyArray: Inputs) => {
	const { client } = AppContext.useContext().value;

	useEffect(() => {
		if (client) {
			return cb();
		}
	}, [client, ...dependencyArray]);
};
