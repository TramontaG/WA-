import { EffectCallback, Inputs, useEffect } from 'preact/hooks';
import WaContext from '../contexts/Wa';

export const useWaLoadEffect = (cb: EffectCallback, dependencyArray: Inputs) => {
	const { Client } = WaContext.useContext().value;

	useEffect(() => {
		if (Client) {
			return cb();
		}
	}, [Client, ...dependencyArray]);
};
