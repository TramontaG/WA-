import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: auto;
	backdrop-filter: blur(2px);
`;

export const ChildrenContainer = styled.div`
	min-width: 1px;
	min-height: 1px;
`;
