import { AppContext } from '../../contexts/App';
import { useSetItemListener } from '../../lib/inject/watchLocalStorage';
import { useWaLoadEffect } from '../../hooks/useWaLoadEffect';

/**
 * This does not mounts anything to the dom. It just keeps the
 * syncs the whatsapp user theme with the lib's theme
 */
export const ThemeSync = () => {
	const { setValue: setTheme } = AppContext.useContext();

	useWaLoadEffect(() => {
		const currentTheme = JSON.parse(localStorage.getItem('theme')!) as string;
		setUserTheme(currentTheme);
	}, []);

	/**
	 * From [this](https://stackoverflow.com/a/57795495) stack overflow awnser
	 * */
	const getSystemThemePreference = () => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark';
		}
		return 'light';
	};

	const setUserTheme = (theme: string) => {
		if (theme === 'light') {
			setTheme({
				theme: {
					variant: 'dark',
				},
			});
		} else if (theme === 'dark') {
			setTheme({
				theme: {
					variant: 'dark',
				},
			});
		} else {
			setTheme({
				theme: {
					variant: getSystemThemePreference(),
				},
			});
		}
	};

	useSetItemListener(({ key, newValue }) => {
		if (key !== 'theme') {
			return;
		}
		setUserTheme(newValue);
	}, 'theme-sync');

	return <></>;
};
