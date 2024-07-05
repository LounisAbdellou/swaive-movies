// Libraries
import { useState } from "react";

// Components/Layout
import MainLayout from "@layouts/MainLayout.tsx";
import MoviesListing from "@components/MoviesListing.tsx";
import Pagination from "@components/Pagination.tsx";

// Utilities
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

const MainPage = () => {
	const movieContext = useMovie();
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<MainLayout>
			<styled.MainContainer>
				<MoviesListing currentPage={currentPage} />
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</styled.MainContainer>
		</MainLayout>
	);
};

export default MainPage;
