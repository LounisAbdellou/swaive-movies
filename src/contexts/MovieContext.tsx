// Libraries
import _ from "lodash";
import { ReactNode, createContext, useRef, useState } from "react";

// Utilities
import { Movie, MovieDetails, MovieContextTypes } from "@src/types/Movie.ts";
import { fetchPopularMovies, fetchMovieDetails, fetchSearchMovies } from "@services/movieServices";

export const MovieContext = createContext<MovieContextTypes>(null!);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
	const totalPages = useRef(-1);
	const currentPage = useRef(-1);
	const moviesQuery = useRef("");

	const getMovies = async (page: number) => {
		if (!_.isEmpty(movies) && page === currentPage.current && _.isEmpty(moviesQuery.current)) {
			return;
		}

		moviesQuery.current = "";

		fetchPopularMovies(page)
			.then((res) => {
				const newMovies: Movie[] = res.data.results;

				currentPage.current = res.data.page;
				totalPages.current = res.data.total_pages;
				setMovies(newMovies);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const getMovieDetails = async (movieId: number) => {
		if (!_.isEmpty(movieDetails) && movieDetails.id === movieId) {
			return;
		}

		fetchMovieDetails(movieId)
			.then((res) => {
				setMovieDetails(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const searchMovies = async (query: string, page: number) => {
		moviesQuery.current = query;
		fetchSearchMovies(query, page)
			.then((res) => {
				const newMovies: Movie[] = res.data.results;

				currentPage.current = res.data.page;
				totalPages.current = res.data.total_pages;
				setMovies(newMovies);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const value = {
		movies,
		movieDetails,
		moviesQuery: moviesQuery.current,
		currentPage: currentPage.current,
		totalPages: totalPages.current,
		getMovies,
		searchMovies,
		getMovieDetails,
	};

	return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
