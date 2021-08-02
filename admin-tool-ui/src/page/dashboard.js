import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getAuthData } from "../bin/authentication/login.auth";
import { darkModeClass } from "../components/dark-mode";

import Header from "../components/page-skull/header";
import SideMenu from "../components/page-skull/side-menu";
import { OrderView } from "../components/views/order.view";
import ProductsView from "../components/views/products.view";
import StatsView from "../components/views/stats.view";

const Dashboard = () => {
	const [loggedUser__ID, setLoggedUser__ID] = useState();
	const [_USER, USER] = useState();

	const [darkMode, setDarkMode] = useState(false);

	const [page, setPage] = useState(3);

	useEffect(() => {
		getAuthData(USER);
	}, [_USER]);

	useEffect(() => {
		let logID = window.localStorage.getItem("a-key").split("kn");
		let userID = logID[0].split("li");

		return setLoggedUser__ID(userID[1]);
	}, []);

	const currentPageHandler = data => {
		return setPage(+data);
	};

	const handleDarkMode = data => {
		return setDarkMode(data);
	};

	return (
		<div>
			{_USER ? (
				_USER._id === loggedUser__ID ? (
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
									<SideMenu user={{ name: _USER.name }} darkMode={darkMode} />
								</Col>
								<Col xs="10" className="p-0">
									<Col xs="12" className="p-0">
										<Header
											user={{ name: _USER.name }}
											activePage={currentPageHandler}
											darkmodeSetter={handleDarkMode}
											darkMode={darkMode}
										/>
									</Col>
									<Col xs="12">
										<div
											className={`${darkModeClass(
												darkMode,
												"text"
											)} main-content`}
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
				) : null
			) : null}
		</div>
	);
};

export default Dashboard;
