import { JSX } from 'preact/jsx-runtime';

type RenderProps = {
	children: JSX.Element;
	when: boolean | (() => boolean);
};

export const Render = ({ children, when }: RenderProps) => {
	const shouldRender = typeof when === 'function' ? when() : when;

	if (shouldRender) {
		return children;
	} else {
		return null;
	}
};
