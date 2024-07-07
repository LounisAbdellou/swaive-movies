// Libraries
import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

// Utilities
import { MainLayoutProps } from "@types/Layout";
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainLayoutStyle";

type Props = {
	setCurrentPage: (page: number) => void;
	children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = ({ children, setCurrentPage }) => {
	let timeout;
	const navigate = useNavigate();
	const movieContext = useMovie();

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		window.clearTimeout(timeout);

		timeout = setTimeout(() => {
			setCurrentPage(1);

			if (_.isEmpty(e.target.value)) {
				movieContext.getMovies(1);
				return;
			}
			movieContext.searchMovies(e.target.value, 1);
		}, 1500);
	};

	return (
		<styled.LayoutContainer>
			<styled.NavBar>
				<styled.TitleContainer>
					<styled.Title onClick={() => navigate("/")}>Swaive Movies</styled.Title>
				</styled.TitleContainer>
				<styled.SearchBarContainer>
					<styled.SearchBar
						placeholder="Search movies"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
					/>
				</styled.SearchBarContainer>
			</styled.NavBar>
			{children}
		</styled.LayoutContainer>
	);
};

export default MainLayout;
