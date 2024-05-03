import { ForwardFn, forwardRef } from 'preact/compat';
import { Checkbox, Container, Label } from './styles';
import { useCheckBoxBehaviour } from './behaviour';

export type CheckBoxProps = {
	label: string;
	onChangeValue: (value: boolean) => any;
	checked?: boolean;
};

const _CheckBox: ForwardFn<CheckBoxProps> = (props, ref) => {
	const onInput = useCheckBoxBehaviour(props);

	return (
		<Container>
			<Checkbox
				checked={props.checked}
				type="checkbox"
				ref={ref}
				onInput={onInput}
			/>
			<Label>{props.label}</Label>
		</Container>
	);
};

export const CheckBox = forwardRef(_CheckBox);
