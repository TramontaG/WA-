import styled, { keyframes } from 'styled-components';
import { CircleIcon } from '../../assets/icons';

export const rotationAnimation = keyframes`
    from { 
        transform: rotate(0deg); 
    }
    to { 
        transform: rotate(360deg); 
    }
`;

export const ringAnimation = keyframes`
    0% {
      stroke-dasharray: 5, 40;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 40, 5;
      stroke-dashoffset: 0;
    }
    100% {
    stroke-dasharray: 5, 40;
      stroke-dashoffset: -45;
    }
`;

export const Container = styled(styled.div<LoadingRingProps>`
	animation: ${rotationAnimation};
	animation-duration: 3s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`).attrs((props: LoadingRingProps) => ({
	style: {
		// transition: 'all 2s ease-in-out',
		// transform: props.full ? 'rotate(360deg)' : 'rotate(0deg)',
	},
}))``;

type LoadingRingProps = {
	full?: boolean;
	count?: number;
};
export const _MyCircle = styled(CircleIcon)<LoadingRingProps>`
	stroke-linecap: round;
	stroke-dasharray: 0;
	stroke-dashoffset: 0;
	display: block;
	animation: ${ringAnimation};
	animation-duration: 3s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;

export const MyCircle = styled(_MyCircle).attrs((props: LoadingRingProps) => ({
	style: {},
}))``;
