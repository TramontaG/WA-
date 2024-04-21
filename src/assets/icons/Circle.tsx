import { JSXInternal } from 'preact/src/jsx';
import { color, getThemedColors } from '../../design';
import { useContext } from 'preact/hooks';
import { ThemeContext } from 'styled-components';

export function CircleIcon(props: JSXInternal.SVGAttributes<SVGSVGElement>) {
	const theme = useContext(ThemeContext);
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			stroke={color(getThemedColors(theme).primary.default)}
			{...props}
		>
			<circle cx="8" cy="8" r={7} fill="none" strokeWidth={1} />
		</svg>
	);
}
