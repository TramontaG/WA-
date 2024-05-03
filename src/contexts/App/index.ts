import { Client } from '../../lib/Client';
import { createSimpleContext } from '../contextFactory';
import { FunctionalComponent } from 'preact';

export type Theme = {
	variant: 'light' | 'dark';
};
export type AlertType = 'success' | 'warning' | 'fail' | 'hidden';

export type Features = {
	MessageReveal: boolean;
};

export type FullScreenModal<Props = Record<string, any>> = {
	open: boolean;
	children: FunctionalComponent<Props>;
	childrenProps: Props;
};

export type AppContextType = {
	alert: {
		type: AlertType;
		message: string;
		render: boolean;
	};
	fullScreenModal: FullScreenModal<any>;
	theme: Theme;
	openChatId: string;
	allChatIds: string[];
	features: Features;
	client: Client | null;
};

const theme = localStorage.getItem('theme');

export const AppContext = createSimpleContext({
	theme: {
		variant: theme ? JSON.parse(theme) : 'light',
	},
	alert: {
		message: 'Mensagem aqui!',
		type: 'hidden',
		render: false,
	},
	openChatId: '',
	allChatIds: [],
	fullScreenModal: {
		open: false,
		children: () => null,
		childrenProps: {},
	},
	features: {
		MessageReveal: true,
	},
	client: null,
} as AppContextType);
