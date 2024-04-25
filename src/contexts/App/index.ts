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

export type AppContext = {
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
};

export const AppContext = createSimpleContext({
	theme: {
		variant: JSON.parse(localStorage.getItem('theme') || '"light"'),
	},
	alert: {
		message: 'Mensagem aqui!',
		type: 'hidden',
		render: false,
	},
	openChatId: '',
	allChatIds: [],
	features: {
		MessageReveal: true,
	},
	fullScreenModal: {
		open: false,
		children: () => null,
		childrenProps: {},
	},
} as AppContext);
