export type MovieContextTypes = {
	movies: Movie[];
	movieDetails: MovieDetails | null;
	moviesQuery: string;
	currentPage: number;
	totalPages: number;
	getMovies: (page: number) => void;
	searchMovies: (query: string, page: number) => void;
	getMovieDetails: (movieId: number) => void;
};

export type Movie = {
	id: number;
	title: string;
	poster_path: string;
};

export type MovieDetails = {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	runtime: number;
	vote_average: number;
	genres: { id: number; name: string }[];
};
