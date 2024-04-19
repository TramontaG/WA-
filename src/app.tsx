import WaContext from './contexts/Wa';
import { AllModules } from './modules';
import { WaLoader } from './modules/WaLoader';

export function App() {
	return (
		<WaContext.Provider>
			<div style={{ width: '100%', height: '100%' }}>
				<WaLoader />
				<AllModules />
			</div>
		</WaContext.Provider>
	);
}
