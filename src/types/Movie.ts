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
