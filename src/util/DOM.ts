const forExpression = (exp: () => boolean): Promise<boolean> => {
	return new Promise(resolve => {
		const checker = setInterval(() => {
			const done = exp();
			if (done) {
				clearInterval(checker);
				resolve(true);
			}
		}, 1000);
	});
};

export const elementGetsVisible = async (selector: string) => {
	await forExpression(() => !!document.querySelector(selector));
	return document.querySelector(selector)!;
};

export const stopBubbling = (e: Event) => {
	console.log('STOPPING BUBBLING FOR EVENT', e);
	e.stopImmediatePropagation();
	e.preventDefault();
	e.stopPropagation();
};
