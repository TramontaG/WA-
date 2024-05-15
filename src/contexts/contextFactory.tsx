import { JSX, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { DeepPartial, recursiveAssign } from '../util/Objects';

export const createAppContext = <T extends Record<string, any>>(data: T) => {
	const MyContext = createContext(
		{} as {
			value: T;
			setValue: (newData: Partial<T>) => void;
		}
	);

	const Provider = (props: { children: JSX.Element }) => {
		const [myData, setMyData] = useState<T>(data);

		const setValue = (descriptor: DeepPartial<T>) => {
			setMyData(recursiveAssign(myData, descriptor));
		};

		return (
			<MyContext.Provider
				value={{
					value: myData,
					setValue: setValue,
				}}
			>
				{props.children}
			</MyContext.Provider>
		);
	};

	return {
		Provider,
		useContext: () => useContext(MyContext),
	};
};
