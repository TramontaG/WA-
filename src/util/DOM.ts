const forExpression = (exp: () => boolean, interval = 1000): Promise<boolean> => {
	return new Promise(resolve => {
		const checker = setInterval(() => {
			const done = exp();
			if (done) {
				clearInterval(checker);
				resolve(true);
			}
		}, interval);
	});
};

export const elementGetsVisible = async (selector: string, interval = 1000) => {
	await forExpression(() => !!document.querySelector(selector), interval);
	return document.querySelector(selector)!;
};

export const stopBubbling = (e: Event) => {
	console.log('STOPPING BUBBLING FOR EVENT', e);
	e.stopImmediatePropagation();
	e.preventDefault();
	e.stopPropagation();
};
