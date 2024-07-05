// Libraries
import { useEffect } from "react";
import _ from "lodash";

// Utilities
import { Movie } from "@types/Movie";
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

type Props = {
	currentPage: number;
};

const MoviesListing: React.FC<{ Props }> = ({ currentPage }) => {
	const movieContext = useMovie();
	const posterUrl = "https://image.tmdb.org/t/p/w300/";

	useEffect(() => {
		movieContext.getMovies(currentPage);
	}, [currentPage]);

	return (
		<styled.MoviesContainer>
			{movieContext.movies.map((movie: Movie) => {
				return (
					<styled.MovieBox key={movie.id}>
						<styled.PosterContainer>
							<img src={posterUrl + movie.poster_path} />
						</styled.PosterContainer>
						<styled.TitleContainer>
							{movie.title}
						</styled.TitleContainer>
					</styled.MovieBox>
				);
			})}
		</styled.MoviesContainer>
	);
};

export default MoviesListing;
