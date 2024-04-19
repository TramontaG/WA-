import { render } from 'preact';
import { App } from './app';

render(
	<App />,
	(() => {
		const app = document.createElement('div');
		app.setAttribute('id', 'WA++');
		app.setAttribute(
			'style',
			`position: absolute;
			z-index: 999;
			width: 100vw;
			height: 100vh;
			pointer-events: none;`
		);
		document.body.append(app);
		return app;
	})()
);
