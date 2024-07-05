// Libraries
import { Routes, Route } from "react-router-dom";

// Pages
import MainPage from "@pages/MainPage.tsx";

// Utilities
import { MovieProvider } from "@contexts/MovieContext";

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<MovieProvider>
						<MainPage />
					</MovieProvider>
				}
			/>
		</Routes>
	);
};

export default App;
