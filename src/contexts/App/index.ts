import { createSimpleContext } from '../contextFactory';

export type Theme = {
	variant: 'light' | 'dark';
};
export type AlertType = 'success' | 'warning' | 'fail' | 'hidden';

export type AppContext = {
	alert: {
		type: AlertType;
		message: string;
		render: boolean;
	};
	theme: Theme;
	openChatId: string;
	allChatIds: string[];
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
} as AppContext);
