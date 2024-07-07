export type MovieContextTypes = {
	movies: Movie[];
	totalPages: number;
	getMovies: () => void;
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
