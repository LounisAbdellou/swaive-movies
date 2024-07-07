// Libraries
import { useEffect } from "react";
import _ from "lodash";

// Utilities
import { Movie } from "@types/Movie";
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

type Props = {
	currentPage: number;
	openModal: () => void;
	posterUrl: string;
};

const MoviesListing: React.FC<{ Props }> = ({ currentPage, openModal, posterUrl }) => {
	const movieContext = useMovie();

	useEffect(() => {
		movieContext.getMovies(1);
	}, []);

	const handleOnClick = async (movieId: number) => {
		await movieContext.getMovieDetails(movieId);
		openModal();
	};

	return (
		<styled.MoviesContainer>
			{movieContext.movies.map((movie: Movie) => {
				return (
					<styled.MovieBox key={movie.id} onClick={() => handleOnClick(movie.id)}>
						<styled.PosterContainer>
							<img src={posterUrl + movie.poster_path} />
						</styled.PosterContainer>
						<styled.TitleContainer>{movie.title}</styled.TitleContainer>
					</styled.MovieBox>
				);
			})}
		</styled.MoviesContainer>
	);
};

export default MoviesListing;
