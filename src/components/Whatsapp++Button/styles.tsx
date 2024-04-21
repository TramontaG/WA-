import { styled } from 'styled-components';
import { color, getThemedColors } from '../../design';

export const Button = styled.button`
	width: 3rem;
	height: 3rem;
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => color(getThemedColors(theme).icon.default)};
`;

export const IconContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const WhatsappIconContainer = styled.div`
	position: absolute;
`;

export const FirstPlusContainer = styled.div`
	position: absolute;
	top: -0.3rem;
	left: 0.2rem;
`;

export const SecondPlusContainer = styled.div`
	position: absolute;
	top: -0.3rem;
	left: 0.7rem;
`;
