import { CheckBoxProps } from '.';

export const useCheckBoxBehaviour = (props: CheckBoxProps) => {
	const onInput = (ev: any) => {
		return props.onChangeValue(ev.target.checked);
	};

	return onInput;
};
