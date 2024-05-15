import { FunctionalComponent } from 'preact';
import { JSX } from 'preact/jsx-runtime';

type ModuleControllerProps = {
	active: boolean;
	children: JSX.Element;
};

export const ModuleController = ({ active, children }: ModuleControllerProps) => {
	if (active) {
		return children;
	}

	return null;
};
