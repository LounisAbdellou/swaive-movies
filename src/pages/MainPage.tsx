// Libraries
import { useState } from "react";
import _ from "lodash";

// Components/Layout
import MainLayout from "@layouts/MainLayout.tsx";
import MoviesListing from "@components/MoviesListing.tsx";
import Pagination from "@components/Pagination.tsx";
import DetailsModal from "@components/DetailsModal.tsx";

// Utilities
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

const MainPage = () => {
	const movieContext = useMovie();
	const posterUrl = "https://image.tmdb.org/t/p/w400/";
	const [showModal, setShowModal] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const handleModalOpen = () => setShowModal(true);
	const handleModalClose = () => setShowModal(false);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);

		if (!_.isEmpty(movieContext.moviesQuery)) {
			movieContext.searchMovies(movieContext.moviesQuery, page);
			return;
		}

		movieContext.getMovies(page);
	};

	return (
		<MainLayout setCurrentPage={setCurrentPage}>
			<styled.MainContainer>
				<MoviesListing openModal={handleModalOpen} posterUrl={posterUrl} />
				<Pagination currentPage={currentPage} handlePageChange={handlePageChange} />
				<DetailsModal
					showModal={showModal}
					closeModal={handleModalClose}
					posterUrl={posterUrl}
				/>
			</styled.MainContainer>
		</MainLayout>
	);
};

export default MainPage;
