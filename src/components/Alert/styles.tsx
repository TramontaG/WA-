import styled from 'styled-components';
import { color, getThemedColors } from '../../design';

export const AlertContainer = styled.div<{ shown: boolean }>`
	position: relative;
	transition: top ease-in-out 0.5s;
	top: ${({ shown }) => (shown ? '0px' : '-205px')};
	display: flex;
	justify-content: flex-end;
	padding: 5px 10px;
`;

export const AlertBody = styled.div`
	background: ${({ theme }) => color(getThemedColors(theme).background.default)};
	color: ${({ theme }) => color(getThemedColors(theme).text.default)};
	width: 33%;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-shadow: black 2px 2px 5px 2px;
	pointer-events: auto;
`;

export const IconContainer = styled.div<{ color: string }>`
	width: 3rem;
	height: 3rem;
	padding: 20px;
	color: ${({ color }) => color};
`;
