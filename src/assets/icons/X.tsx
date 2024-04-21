import { JSXInternal } from 'preact/src/jsx';

export function XIcon(props: JSXInternal.SVGAttributes<SVGSVGElement>) {
	return (
		<svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" {...props}>
			<path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
		</svg>
	);
}
