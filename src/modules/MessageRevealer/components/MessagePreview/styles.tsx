import styled from 'styled-components';

export const Image = styled.img`
	height: 100%;
	object-fit: contain;
	max-width: 100%;
	max-height: 100%;
`;

export const Multimidia = styled.video`
	border-radius: 15px;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	pointer-events: auto;
`;

export const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
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
