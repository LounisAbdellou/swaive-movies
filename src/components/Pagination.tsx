// Libraries
import { useEffect } from "react";
import _ from "lodash";

// Utilities
import { Movie } from "@types/Movie";
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

type Props = {
	currentPage: number;
	handlePageChange: (page: number) => void;
};

const Pagination: React.FC<{ Props }> = ({ currentPage, handlePageChange }) => {
	const movieContext = useMovie();

	const pageRange = (totalPages, currPage) => {
		const pages = [];
		const maxVisiblePages = 12;
		let startPage = Math.max(1, currPage - Math.floor(maxVisiblePages / 2));
		let endPage = Math.min(totalPages, currPage + Math.floor(maxVisiblePages / 2));

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		return pages;
	};

	return (
		<styled.PaginationContainer>
			<styled.PaginationBox onClick={() => handlePageChange(Math.max(1, currentPage - 1))}>
				{"<"}
			</styled.PaginationBox>
			{pageRange(movieContext.totalPages, currentPage).map((page: number) => {
				return (
					<styled.PaginationBox
						key={page}
						$isCurrent={page === currentPage}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</styled.PaginationBox>
				);
			})}
			<styled.PaginationBox
				onClick={() => handlePageChange(Math.min(movieContext.totalPages, currentPage + 1))}
			>
				{">"}
			</styled.PaginationBox>
		</styled.PaginationContainer>
	);
};

export default Pagination;
