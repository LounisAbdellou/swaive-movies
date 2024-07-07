import http from "./http-tmdb.ts";

export const fetchPopularMovies = (page: number) => {
	return http.get(`/discover/movie?page=${page}&sort_by=popularity.desc`);
};

export const fetchMovieDetails = (movieId: number) => {
	return http.get(`/movie/${movieId}`);
};

export const fetchSearchMovies = (query: string, page: number) => {
	return http.get(`/search/movie?query=${query}&page=${page}`);
};
