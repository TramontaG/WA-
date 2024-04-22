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

export const Container = styled.div`
	animation: ${rotationAnimation};
	animation-duration: 1.5s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

export const MyCircle = styled(CircleIcon)`
	stroke-linecap: round;
	stroke-dasharray: 0;
	stroke-dashoffset: 0;
	display: block;
	animation: ${ringAnimation};
	animation-duration: 2s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;
