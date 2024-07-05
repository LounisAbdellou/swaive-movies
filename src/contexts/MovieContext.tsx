// Libraries
import _ from "lodash";
import { ReactNode, createContext, useRef, useState } from "react";

// Utilities
import { getTimeDiffInMinutes } from "@helpers/dateTime";
import { Movie, MovieContextTypes, StoredDataTypes } from "@types/Movie";
import { fetchPopularMovies } from "@services/movieServices";

export const MovieContext = createContext<MovieContextTypes>(null!);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const totalPages = useRef(-1);
	const currentPage = useRef(-1);

	const getMovies = async (page: number) => {
		if (!_.isEmpty(movies) && page === currentPage.current) return;

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

	const value = {
		movies,
		totalPages: totalPages.current,
		getMovies,
	};

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
};
