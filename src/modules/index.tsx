import { useEffect, useState } from 'preact/hooks';
import { MessageRevealer } from './MessageRevealer';
import { ChatTools } from './ChatTools';
import { ThemeSync } from './ThemeSync';
import { AppContext } from '../contexts/App';
import { ModuleController } from './ModuleController';

export const AllModules = () => {
	const { client, features } = AppContext.useContext().value;

	const [modulesReady, setModulesReady] = useState(false);

	useEffect(() => {
		if (!!client) {
			setModulesReady(true);
		}
	}, [client]);

	if (!modulesReady) {
		return null;
	} else {
		return (
			<>
				<ModuleController active={!!features.MessageReveal}>
					<MessageRevealer />
				</ModuleController>

				<ChatTools />
				<ThemeSync />
			</>
		);
	}
};
