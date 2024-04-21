import { createSimpleContext } from '../contextFactory';

export type Theme = 'light' | 'dark';
export type AlertType = 'success' | 'warning' | 'fail' | 'hidden';

export type AppContext = {
	alert: {
		type: AlertType;
		message: string;
		render: boolean;
	};
	theme: Theme;
	openChat: string;
};

export const AppContext = createSimpleContext({
	theme: 'light',
	alert: {
		message: 'Mensagem aqui!',
		type: 'hidden',
		render: false,
	},
	openChat: '',
} as AppContext);
