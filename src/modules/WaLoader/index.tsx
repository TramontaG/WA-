import { useEffect, useState } from 'preact/hooks';
import WaContext from '../../contexts/Wa';
import { Client } from '../../lib/Client';
import { inject } from '../../lib/inject';
import { elementGetsVisible } from '../../util/DOM';

export const WaLoader = () => {
	const { value: Wa, setValue: setWa } = WaContext.useContext();

	useEffect(() => {
		elementGetsVisible('span[data-icon="archived"]').then(async () => {
			const { Store, WAInterface } = await inject();
			if (!!Store && !!WAInterface) {
				setWa({
					Client: new Client(),
				});
			}
			console.log('WA++ EXTENSION READY');
		});
	}, []);

	return null;
};
