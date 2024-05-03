import { useEffect } from 'preact/hooks';
import { Client } from '../../lib/Client';
import { inject } from '../../lib/inject';
import { elementGetsVisible } from '../../util/DOM';
import { AppContext } from '../../contexts/App';

export const WaLoader = () => {
	const { value: appContext, setValue: setAppContext } = AppContext.useContext();

	useEffect(() => {
		elementGetsVisible('span[data-icon="archived"]').then(async () => {
			const { Store, WAInterface } = await inject();
			if (!!Store && !!WAInterface) {
				setAppContext({
					client: new Client(),
				});
			}
			console.log('WA++ EXTENSION READY');
		});
	}, []);

	return null;
};
