import { useEffect, useState } from 'preact/hooks';
import './app.css';
import { elementGetsVisible } from './util/DOM';
import { inject } from './lib/inject';
import WaContext from './contexts/Wa';
import { Client } from './lib/Client';
import { WaLoader } from './components/WaLoader';

export function App() {
	return (
		<WaContext.Provider>
			<WaLoader />
		</WaContext.Provider>
	);
}
