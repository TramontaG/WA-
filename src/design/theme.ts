import { Colord } from 'colord';
import { Console } from 'console';

type HsbColor = Readonly<[number, number, number]>;

const createColorList = (color: HsbColor) => {
	const [hue, saturation, brightness] = color;

	return {
		default: color,
		withSaturation: (sat: number) => [hue, sat, brightness] as const,
		withBrigthness: (bright: number) => [hue, saturation, bright] as const,
		addSaturation: (sat: number) => [hue, saturation + sat, brightness] as const,
		addBrightness: (bright: number) =>
			[hue, saturation, bright + brightness] as const,
	};
};

export const colors = {
	dark: {
		background: createColorList([173, 91, 22]),
		text: createColorList([200, 3, 94]),
		redFail: createColorList([6, 82, 62]),
		greenSuccess: createColorList([146, 79, 81]),
		primary: createColorList([175, 95, 41]),
		secundary: createColorList([176, 97, 60]),
		tertiary: createColorList([159, 86, 76]),
		icon: createColorList([203, 16, 63]),
	},
	light: {
		background: createColorList([216, 2, 96]),
		text: createColorList([100, 7, 18]),
		redFail: createColorList([0, 56, 92]),
		greenSuccess: createColorList([123, 39, 84]),
		primary: createColorList([146, 64, 92]),
		secundary: createColorList([147, 40, 96]),
		tertuary: createColorList([149, 18, 99]),
		icon: createColorList([202, 24, 44]),
	},
};

export const color = ([h, s, v]: HsbColor) => {
	const color = new Colord({ h, s, v });
	return color.toHex();
};

export const getThemedColors = (theme: any) => {
	if (theme.variant === 'dark' || theme === 'dark') {
		return colors.dark;
	} else {
		debugger;
		return colors.light;
	}
};
