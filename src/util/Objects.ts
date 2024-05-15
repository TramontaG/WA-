export type DeepPartial<T extends Record<string, any>> = {
	[key in keyof T]?: T[key] extends Record<string, any>
		? DeepPartial<T[key]>
		: T[key];
};

/**
 * This function traverses the object in the first parameter, applying the
 * changes that the objects in the second parameter specifies.
 * @example
 *  recursiveAssign({foo: 1, bar: { baz: 2 }}, { foo: 2 }) => {foo: 2, bar: { baz: 2 }}
 *  recursiveAssign({foo: 1, bar: { baz: 2 }}, { bar: { baz: 3} }) => {foo: 1, bar: { baz: 3 }}
 * @param oldData
 * @param newData
 * @returns
 */
export const recursiveAssign = <T extends Record<string, any>>(
	oldData: T,
	newData: Record<string, any>
) => {
	return Object.entries(newData).reduce((object, [key, value]) => {
		// The part `value.constructor === {}.constructor` is used here in order to avoid
		// calling Object.entries on an object that is not literal, when the object was created
		// by instantiating a class, like `const obj = new ObjClass()`
		if (value && typeof value === 'object' && value.constructor === {}.constructor) {
			const newObject: Record<string, any> = recursiveAssign(
				oldData[key],
				newData[key]
			);

			return {
				...object,
				[key]: {
					...newObject,
				},
			};
		}
		return {
			...object,
			[key]: newData[key] === undefined ? oldData[key] : newData[key],
		};
	}, oldData as T);
};
