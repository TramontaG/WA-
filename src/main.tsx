import { render } from 'preact';
import { App } from './app';
import './index.css';

render(
	<App />,
	(() => {
		const app = document.createElement('div');
		app.setAttribute('id', 'WA++');
		document.body.append(app);
		return app;
	})()
);
