import styled from 'styled-components';
import { color, getThemedColors } from '../../design';

export const Container = styled.div`
	height: 75%;
	background: ${({ theme }) => color(getThemedColors(theme).background.default)};
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	max-width: 75%;
`;

export const ImageContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CaptionContainer = styled.div`
	height: 10%;
	width: 75%;
	top: calc(90%);
	display: flex;
	justify-content: center;
	align-items: center;
	line-break: auto;
	overflow: scroll;
	display: inline-block;
	position: absolute;
	text-align: center;
`;
