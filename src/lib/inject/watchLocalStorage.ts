type SetItemPayload = {
	key: string;
	oldValue: any;
	newValue: any;
};

type RemoveItemPayload = {
	key: string;
	oldValue: any;
};

type EventCallback<Payload extends SetItemPayload | RemoveItemPayload> = (
	payload: Payload
) => any;

type EventCallbackMap = {
	setItem: Record<string, EventCallback<SetItemPayload>>;
	removeItem: Record<string, EventCallback<RemoveItemPayload>>;
};

const eventCallbackMap: EventCallbackMap = {
	setItem: {},
	removeItem: {},
};

/**
 * With the help of [this](https://stackoverflow.com/a/69380917) stack overflow awnser
 */

Storage.prototype.setItem = new Proxy(Storage.prototype.setItem, {
	apply(target, thisArg, argumentList) {
		const payload = {
			key: argumentList[0],
			oldValue: JSON.parse(thisArg.getItem(argumentList[0])),
			newValue: JSON.parse(argumentList[1]),
		} as SetItemPayload;

		Object.values(eventCallbackMap.setItem).forEach(handler => {
			handler(payload);
		});

		return Reflect.apply(target, thisArg, argumentList);
	},
});

Storage.prototype.removeItem = new Proxy(Storage.prototype.removeItem, {
	apply(target, thisArg, argumentList) {
		const payload = {
			key: argumentList[0],
			oldValue: JSON.parse(thisArg.getItem(argumentList[0])),
		} as RemoveItemPayload;

		Object.values(eventCallbackMap.removeItem).forEach(handler => {
			handler(payload);
		});

		return Reflect.apply(target, thisArg, argumentList);
	},
});

/**
 * Hook that enables to listen to changes in localStorage. The callback is triggered
 * whenever some item is set;
 * @param callback
 * @param key
 */
export const useSetItemListener = (
	callback: EventCallback<SetItemPayload>,
	key: string
) => {
	if (!eventCallbackMap.setItem[key]) {
		eventCallbackMap.setItem[key] = callback;
	}
};

/**
 * Hook that enables to listen to changes in localStorage. The callback is triggered
 * whenever some item is removed;
 * @param callback
 * @param key
 */
export const useRemoveItemListener = (
	callback: EventCallback<RemoveItemPayload>,
	key: string
) => {
	if (!eventCallbackMap.removeItem[key]) {
		eventCallbackMap.removeItem[key] = callback;
	}
};
