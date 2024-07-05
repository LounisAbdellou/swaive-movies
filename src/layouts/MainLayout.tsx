// Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// Utilities
import { MainLayoutProps } from "@types/Layout";
import * as style from "@styles/mainLayoutStyle";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<style.LayoutContainer>
			<style.NavBar>
				<style.TitleContainer>
					<style.Title onClick={() => navigate("/")}>
						Swaive Movies
					</style.Title>
				</style.TitleContainer>
				<style.SearchBarContainer></style.SearchBarContainer>
			</style.NavBar>
			{children}
		</style.LayoutContainer>
	);
};

export default MainLayout;
