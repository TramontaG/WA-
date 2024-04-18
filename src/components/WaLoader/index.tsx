import { useEffect, useState } from 'preact/hooks';
import WaContext from '../../contexts/Wa';
import { Client } from '../../lib/Client';
import { inject } from '../../lib/inject';
import { elementGetsVisible } from '../../util/DOM';

export const WaLoader = () => {
	const [documentLoaded, setDocumentLoaded] = useState(false);
	const [WaInitialized, setWAIinitialized] = useState(false);
	const { value: Wa, setValue: setWa } = WaContext.useContext();

	useEffect(() => {
		elementGetsVisible('#app').then(() => {
			setDocumentLoaded(true);
		});
	}, []);

	useEffect(() => {
		elementGetsVisible('span[data-icon="archived"]').then(async () => {
			const { Store, WAInterface } = await inject();
			if (!!Store && !!WAInterface) {
				setWa({
					WAInterface: new Client(),
				});
			}
			setWAIinitialized(true);
		});
	}, []);

	if (!documentLoaded || !WaInitialized) {
		return null;
	}

	return <h1>DONE!</h1>;
};
