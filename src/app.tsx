import { ThemeProvider } from 'styled-components';
import { AlertComponent } from './components/Alert';
import WaContext from './contexts/Wa';
import { AllModules } from './modules';
import { WaLoader } from './modules/WaLoader';
import { AppContext } from './contexts/App';
import { checkVersion } from './hooks/checkVersion';

export function App() {
	return (
		<WaContext.Provider>
			<AppContext.Provider>
				<AppContent />
			</AppContext.Provider>
		</WaContext.Provider>
	);
}

const AppContent = () => {
	const { theme } = AppContext.useContext().value;
	checkVersion();
	return (
		<ThemeProvider
			theme={{
				variant: theme.variant,
			}}
		>
			<div style={{ width: '100%', height: '100%' }}>
				<WaLoader />
				<AllModules />
				<AlertComponent />
			</div>
		</ThemeProvider>
	);
};
