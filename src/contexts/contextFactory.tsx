import { JSX, createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

export const createSimpleContext = <T extends Record<string, any>>(data: T) => {
	const MyContext = createContext(
		{} as {
			value: T;
			setValue: (newData: Partial<T>) => void;
		}
	);

	const Provider = (props: { children: JSX.Element }) => {
		const [myData, setMyData] = useState<T>(data);
		const setValue = (newData: Partial<T>) => {
			console.log(newData);
			setMyData({
				...myData,
				...newData,
			});
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
