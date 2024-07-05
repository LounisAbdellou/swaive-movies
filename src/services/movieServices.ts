import http from "./http-tmdb.ts";

export const fetchPopularMovies = (page: number) => {
	return http.get(`/discover/movie?page=${page}&sort_by=popularity.desc`);
};
