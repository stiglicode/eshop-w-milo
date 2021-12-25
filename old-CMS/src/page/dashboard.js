import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { get } from "../bin/fetch/index";
import { darkModeClass } from "../components/dark-mode";

import Header from "../components/page-skull/header";
import SideMenu from "../components/page-skull/side-menu";
import { OrderView } from "../components/views/order.view";
import ProductsView from "../components/views/products.view";
import StatsView from "../components/views/stats.view";

const Dashboard = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [page, setPage] = useState(3);
	const currentPageHandler = data => {
		return setPage(+data);
	};

	const handleDarkMode = data => {
		return setDarkMode(data);
	};
	return (
		<div>
			<React.Fragment>
				<div
					className={`${
						darkMode ? "body-dark" : "bg-secondary"
					} text-light pt-2 pb-2`}
				>
					<h5
						className="text-center mb-0 heading-light"
						title="CMS for Patres eshop"
					>
						Dashboard
					</h5>
				</div>
				<Container fluid>
					<Row>
						<Col xs="2" className="p-0">
							<SideMenu
								user="{{ name: loginChecker().name }}"
								darkMode={darkMode}
							/>
						</Col>
						<Col xs="10" className="p-0">
							<Col xs="12" className="p-0">
								<Header
									user="{{ name: loginChecker().name }}"
									activePage={currentPageHandler}
									darkmodeSetter={handleDarkMode}
									darkMode={darkMode}
								/>
							</Col>
							<Col xs="12">
								<div
									className={`${darkModeClass(darkMode, "text")} main-content`}
								>
									{page === 1 ? (
										<ProductsView darkMode={darkMode} />
									) : page === 2 ? (
										<StatsView darkMode={darkMode} />
									) : page === 3 ? (
										<OrderView darkMode={darkMode} />
									) : (
										"404 - Not found"
									)}
								</div>
							</Col>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		</div>
	);
};

export default Dashboard;
