import { FunctionalComponent } from 'preact';
import {
	AppContext,
	type FullScreenModal as FullScreenModalType,
} from '../contexts/App';
import { FullScreenModal } from '../components/FullScreenModal';
import { useEffect } from 'preact/hooks';

type EffectCallback = (modal: FullScreenModalType) => any;

type LifecycleCb = () => any;

type UseModalArgs = {
	beforeOpen?: LifecycleCb;
	afterOpen?: LifecycleCb;
	beforeClose?: LifecycleCb;
	afterClose?: LifecycleCb;
};

export const useModal = ({
	afterClose,
	afterOpen,
	beforeClose,
	beforeOpen,
}: UseModalArgs) => {
	const { value: context, setValue: setContext } = AppContext.useContext();

	const openModal = <Props extends Record<string, any>>(
		component: FunctionalComponent<Props>,
		props?: Props
	) => {
		beforeOpen?.();
		setContext({
			fullScreenModal: {
				open: true,
				children: component,
				childrenProps: props ?? {},
			},
		});

		afterOpen?.();
	};

	const closeModal = () => {
		beforeClose?.();
		setContext({
			fullScreenModal: {
				open: false,
				children: () => null,
				childrenProps: {},
			},
		});
		afterClose?.();
	};

	const useModalEffect = (cb: EffectCallback) => {
		useEffect(() => {
			cb(context.fullScreenModal);
		}, [context.fullScreenModal]);
	};

	return {
		openModal,
		closeModal,
		useModalEffect,
	};
};
