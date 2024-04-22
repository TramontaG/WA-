import { CheckIcon, ExclamationIcon, XIcon } from '../../assets/icons';
import { AlertType, AppContext } from '../../contexts/App';
import { color, getThemedColors } from '../../design';

export const useAlert = () => {
	const { value, setValue } = AppContext.useContext();

	const hideAlert = (oldMessage: string) => {
		setValue({
			alert: {
				message: oldMessage,
				type: 'hidden',
				render: true,
			},
		});

		setTimeout(() => {
			setValue({
				alert: {
					message: oldMessage,
					type: 'hidden',
					render: false,
				},
			});
		}, 500);
	};

	const showAlert = (type: AlertType, message: string, timeInSeconds = 4) => {
		if (value.alert.render) {
			return;
		}

		setValue({
			alert: {
				message,
				type: 'hidden',
				render: true,
			},
		});

		requestAnimationFrame(() => {
			setValue({
				alert: {
					message,
					type,
					render: true,
				},
			});
		});

		setTimeout(() => {
			hideAlert(message);
		}, timeInSeconds * 1000);
	};

	const showSuccess = (message: string, timeInSeconds = 4) => {
		showAlert('success', message, timeInSeconds);
	};

	const showFail = (message: string, timeInSeconds = 4) => {
		setValue({
			alert: {
				message,
				type: 'fail',
				render: true,
			},
		});

		setTimeout(() => {
			hideAlert(message);
		}, timeInSeconds * 1000);
	};

	const showWarning = (message: string, timeInSeconds = 4) => {
		setValue({
			alert: {
				message,
				type: 'warning',
				render: true,
			},
		});

		setTimeout(() => {
			hideAlert(message);
		}, timeInSeconds * 1000);
	};

	return {
		showSuccess,
		showFail,
		showWarning,
	};
};

export const useAlertBehavior = () => {
	const { alert, theme } = AppContext.useContext().value;

	const Icon = () => {
		if (alert.type === 'fail') {
			return XIcon;
		}

		if (alert.type === 'warning') {
			return ExclamationIcon;
		}

		return CheckIcon;
	};

	const getColor = () => {
		if (alert.type === 'fail') {
			return color(getThemedColors(theme.variant).redFail.default);
		}
		if (alert.type === 'warning') {
			return color(getThemedColors(theme.variant).text.default);
		}
		return color(getThemedColors(theme.variant).greenSuccess.default);
	};

	return {
		Icon: Icon(),
		iconColor: getColor(),
		shown: alert.type !== 'hidden',
		render: alert.render,
	};
};
