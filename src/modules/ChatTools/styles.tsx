import { css, styled } from 'styled-components';
import { ToolContainerHeight } from './Tools/ForwardMessage/styles';
import { color, getThemedColors } from '../../design';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	padding: 5px;
`;

export const ToolBarContainer = styled.div<{ open: boolean }>`
	display: flex;
	flex-direction: column-reverse;
	position: absolute;
	bottom: 62px;
	right: 0px;
	border-radius: 15px 15px 0px 0px;
	overflow: hidden;
	transition: height ease-in-out 0.2s;
	height: ${props =>
		props.open ? (props.children.length ?? 1) * ToolContainerHeight : 0}px;
`;

export const ButtonPrimitiveStyle = styled.button`
	width: 300px;
	height: 100%;
	height: ${ToolContainerHeight}px;
	background: ${({ theme }) => color(getThemedColors(theme).header.default)};
	color: ${({ theme }) => color(getThemedColors(theme).text.default)};
	box-sizing: content-box;
	border-bottom: solid 2px
		${({ theme }) => color(getThemedColors(theme).header.default)};

	font-weight: 400;
	line-height: 19px;
	font-size: 14.2px;

	transition: all ease-in-out 0.25s;
	&:hover {
		border-bottom: solid 2px
			${({ theme }) => color(getThemedColors(theme).primary.default)};
		background: ${({ theme }) =>
			color(getThemedColors(theme).header.addBrightness(-10))};
	}
`;
