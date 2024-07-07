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

export const SearchBar = styled.input`
	box-sizing: border-box;
	font-family: inherit;
	font-size: 14px;
	vertical-align: baseline;
	font-weight: 400;
	line-height: 1.29;
	letter-spacing: 0.16px;
	border-radius: 0;
	outline: 2px solid transparent;
	outline-offset: -2px;
	width: 100%;
	height: 40px;
	border: none;
	border-bottom: 1px solid #8d8d8d;
	background-color: #1f2023;
	padding: 0 16px;
	color: var(--text);
	transition:
		background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
		outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

	&:focus {
		outline: 2px solid var(--secondary);
		outline-offset: -2px;
	}
`;
