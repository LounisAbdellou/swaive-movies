import styled from "styled-components";

export const MainContainer = styled.div`
	flex: 1 1 auto;
	padding: 20px;
	background: linear-gradient(180deg, #131a1f 0%, var(--background) 100%);
`;

export const MoviesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 26px;

	h1 {
		margin-top: 80px;
		font-weight: var(--heading-weight);
		font-size: var(--heading-large);
		color: var(--text);
	}
`;

export const MovieBox = styled.div`
	display: flex;
	flex: 25%;
	color: var(--text);
	cursor: pointer;
	max-width: 300px;
	min-width: 150px;
	background-color: var(--primary);
	flex-direction: column;
	box-shadow:
		inset 0 0 54px #343a3eb3,
		0 0 5px 1px #e2e6e899;

	&:hover {
		img {
			filter: brightness(50%);
		}
		color: var(--secondary);
	}
`;

export const MovieDetailsContainer = styled.div`
	display: flex;
	color: var(--text);
	gap: 20px;

	h1 {
		font-weight: var(--heading-weight);
		font-size: var(--heading-medium);
		text-decoration: underline;
	}

	span {
		font-weight: var(--heading-weight);
	}

	@media (max-width: 1000px) {
		img {
			width: 250px;
		}
	}

	@media (max-width: 820px) {
		flex-direction: column;
		align-items: center;

		p {
			font-size: var(--body-small);
		}

		img {
			width: 150px;
		}
	}
`;

export const PosterContainer = styled.div`
	flex: 1 1 auto;

	img {
		transition: 0.3s;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const TitleContainer = styled.div`
	flex: 0 1 25px;
	padding: 5px 10px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const PaginationContainer = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	list-style: none;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	gap: 10px;
`;

export const PaginationBox = styled.li<{ $isCurrent?: boolean }>`
	cursor: pointer;
	height: 33px;
	width: 33px;
	color: var(${(props) => (props.$isCurrent ? "--secondary" : "--text")});
	transition: 0.3s;
	border: 1px solid;
	border-color: var(${(props) => (props.$isCurrent ? "--secondary" : "--text")});
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: var(--secondary);
		border: 1px solid var(--secondary);
	}
`;
