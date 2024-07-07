// Libraries
import _ from "lodash";

// Components/Layout
import Modal from "@components/Modal.tsx";

// Utilities
import { useMovie } from "@hooks/useMovie.ts";
import * as styled from "@styles/mainPageStyle.ts";

type Props = {
	showModal: boolean;
	closeModal: () => void;
	posterUrl: string;
};

const DetailsModal: React.FC<{ Props }> = ({ showModal, closeModal, posterUrl }) => {
	const movieContext = useMovie();

	return (
		<Modal isOpen={showModal} onClose={closeModal}>
			<Modal.Header>Movie Details</Modal.Header>
			<Modal.Content>
				{!_.isEmpty(movieContext.movieDetails) && (
					<styled.MovieDetailsContainer>
						<img src={posterUrl + movieContext.movieDetails.poster_path} />
						<div>
							<h1>{movieContext.movieDetails.title}</h1>
							<p>
								<span>Duration: </span>
								{movieContext.movieDetails.runtime} minutes
							</p>
							<p>
								<span>Ratings: </span>
								{movieContext.movieDetails.vote_average.toFixed(1)}/10
							</p>
							<p>
								<span>Genres: </span>
								{movieContext.movieDetails.genres.map(
									(genre: { id: number; name: string }, i, { length }) => {
										if (i === length - 1) {
											return genre.name;
										}
										return genre.name + ", ";
									}
								)}
							</p>
							<p>
								<span>Summary: </span>
								{movieContext.movieDetails.overview}
							</p>
						</div>
					</styled.MovieDetailsContainer>
				)}
			</Modal.Content>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
};

export default DetailsModal;
