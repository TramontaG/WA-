import { ThemeProvider } from 'styled-components';
import { AlertComponent } from './components/Alert';
import { AllModules } from './modules';
import { WaLoader } from './modules/WaLoader';
import { AppContext } from './contexts/App';
import { FullScreenModal } from './components/FullScreenModal';

// ThemeProvider depends on AppContextProvided

export function App() {
	return (
		<AppContext.Provider>
			<AppContent />
		</AppContext.Provider>
	);
}

const AppContent = () => {
	const appContext = AppContext.useContext().value;
	return (
		<ThemeProvider
			theme={{
				variant: appContext.theme?.variant || 'light',
			}}
		>
			<div style={{ width: '100%', height: '100%' }}>
				<WaLoader />
				<AllModules />

				<AlertComponent />
				<FullScreenModal />
			</div>
		</ThemeProvider>
	);
};
