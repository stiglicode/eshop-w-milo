import React from "react";
import MainHeader from "../../Header";
import ProductsScene from "../../../modules/ProductModule";

const MainContent = (): JSX.Element => {
	return (
		<main className="custom-col custom-col--main_content">
			<MainHeader/>
			<div className="main-content">
				<ProductsScene/>
			</div>
		</main>
	);
};

export default MainContent;