import { useEffect, useState } from 'preact/hooks';
import WaContext from '../contexts/Wa';
import { MessageRevealer } from './MessageRevealer';

export const AllModules = () => {
	const { value: Wa } = WaContext.useContext();
	const [modulesReady, setModulesReady] = useState(false);

	useEffect(() => {
		if (!!Wa) {
			setModulesReady(true);
		}
	}, [Wa]);

	if (!modulesReady) {
		return null;
	} else {
		return (
			<>
				<MessageRevealer />
			</>
		);
	}
};
