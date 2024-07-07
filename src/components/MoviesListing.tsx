// Libraries
import { useEffect } from "react";
import _ from "lodash";

// Utilities
import { Movie } from "@src/types/Movie";
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

type Props = {
	openModal: () => void;
	posterUrl: string;
};

const MoviesListing: React.FC<Props> = ({ openModal, posterUrl }) => {
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
			{!_.isEmpty(movieContext.movies) ? (
				movieContext.movies.map((movie: Movie) => {
					return (
						<styled.MovieBox key={movie.id} onClick={() => handleOnClick(movie.id)}>
							<styled.PosterContainer>
								<img src={posterUrl + movie.poster_path} />
							</styled.PosterContainer>
							<styled.TitleContainer>{movie.title}</styled.TitleContainer>
						</styled.MovieBox>
					);
				})
			) : (
				<h1>No movies found</h1>
			)}
		</styled.MoviesContainer>
	);
};

export default MoviesListing;
