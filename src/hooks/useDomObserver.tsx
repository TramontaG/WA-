import { useCallback, useState } from 'preact/hooks';
import { elementGetsVisible } from '../util/DOM';
import { useWaLoadEffect } from './useWaLoadEffect';

type UseDomObserverOptions = MutationObserverInit &
	Partial<{
		allowPropagation: boolean;
	}>;

/**
 * This hook will execute a callback whenever the dom element obtained by the provided
 * selector suffers a mutation. Its a wrapper fo the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) Api
 * @param selector - The selector for the element you want to observe
 * @param cb - The callback that should be execute when the observed element mutates
 * @param options - Options object passed to `Observer.observe(node, options)`
 * @returns
 */
export const useDomObserver = <Result,>(
	selector: string,
	cb: () => Result,
	options: UseDomObserverOptions = {
		childList: true,
	}
) => {
	const [observer, setDomObserver] = useState<MutationObserver | null>(null);
	const [node, setNode] = useState<Node | null>(null);

	const callbackWrapper = useCallback(async () => {
		if (options.allowPropagation ?? false) {
			return cb();
		}

		observer?.disconnect();
		const result = await cb();
		activateOldObserver();
		return result;
	}, [observer, options]);

	const setupObserver = async () => {
		if (!observer) {
			return createNewObserver();
		}
		activateOldObserver();
	};

	const createNewObserver = async () => {
		if (observer) {
			return observer;
		}
		const observedNode = await elementGetsVisible(selector, 100);
		setNode(observedNode);
		const myObserver = new MutationObserver(callbackWrapper);
		setDomObserver(myObserver);
		myObserver.observe(observedNode, options);
	};

	const activateOldObserver = () => {
		if (observer) {
			observer.observe(node!, options);
		}
	};

	const start = () => {
		setupObserver();
	};

	const flush = () => {
		observer?.disconnect();
		setDomObserver(null);
	};

	useWaLoadEffect(() => {
		setupObserver();
	}, []);

	return {
		start,
		flush,
	};
};

export const CommonSelectors = {
	chatWindow: '#app > div > div > :nth-child(4)',
};
