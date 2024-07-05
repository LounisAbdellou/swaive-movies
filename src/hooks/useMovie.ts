import { MovieContext } from "@contexts/MovieContext";
import { useContext } from "react";

export const useMovie = () => {
	return useContext(MovieContext);
};
