import { FunctionalComponent } from 'preact';
import { JSX } from 'preact/jsx-runtime';

type ModuleControllerProps = {
	active: boolean;
	children: JSX.Element;
};

export const ModuleController = ({ active, children }: ModuleControllerProps) => {
	console.log(`Rendering of messageController is ${active}`);

	if (active) {
		return children;
	}

	return null;
};
