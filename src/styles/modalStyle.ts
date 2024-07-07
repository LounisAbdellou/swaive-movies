import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.div`
	margin: 20px;
	width: 100%;
	max-height: 95%;
	background-color: var(--background);
	border-radius: 16px;
`;

export const Header = styled.div`
	display: flex;
	padding: 20px;
	gap: 10px;
	color: var(--text);
	justify-content: space-between;
	img {
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
`;

export const Content = styled.div`
	padding: 20px;
`;

export const Footer = styled.div`
	padding: 20px;
`;
