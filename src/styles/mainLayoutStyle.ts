import styled from "styled-components";

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
`;

export const NavBar = styled.div`
	display: flex;
	flex: 0 1 75px;
	justify-content: space-between;
	padding-left: 20px;
	padding-right: 20px;
	background-color: var(--background);
`;

export const TitleContainer = styled.div`
	cursor: pointer;
`;

export const Title = styled.h1`
	font-size: var(--heading-large);
	font-weight: var(--heading-weight);
	color: var(--text);
`;

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;
