import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DarkModeSwitcher, { darkModeClass } from "../dark-mode";

import ExitSession from "../logout";

const Header = props => {
	const handleViewChanger = e => {
		return props.activePage(e.currentTarget.id.split("-")[1]);
	};

	const darkModeCheck = data => {
		return props.darkmodeSetter(data);
	};

	return (
		<header>
			<div
				className={`${darkModeClass(props.darkMode)} pt-2 pb-2 border-bottom`}
			>
				<Container fluid>
					<Row className="px-5">
						<Col xs="4">
							<DarkModeSwitcher check={darkModeCheck} />
						</Col>
						<Col xs="4">
							<div className="d-flex justify-content-center align-items-center h-100">
								<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
									<li>
										<Link
											onClick={handleViewChanger}
											to="#/orders"
											className="btn-hoverd nav-link "
											id="btn-3"
										>
											<svg
												width="24"
												height="24"
												viewBox="0 0 16 16"
												fill="currentColor"
												className="bi bi-briefcase d-block  mx-auto mb-1"
											>
												<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
											</svg>
											Orders
										</Link>
									</li>
									<li>
										<Link
											onClick={handleViewChanger}
											to="#/products"
											className="btn-hoverd nav-link "
											id="btn-2"
										>
											<svg
												width="24"
												height="24"
												fill="currentColor"
												className="bi bi-box d-block  mx-auto mb-1"
												viewBox="0 0 16 16"
											>
												<path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
											</svg>
											Products
										</Link>
									</li>
									<li>
										<Link
											onClick={handleViewChanger}
											to="#/stats"
											className="btn-hoverd nav-link "
											id="btn-1"
										>
											<svg
												width="24"
												height="24"
												fill="currentColor"
												className="bi bi-pie-chart d-block  mx-auto mb-1"
												viewBox="0 0 16 16"
											>
												<path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
											</svg>
											Stats
										</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col xs="4">
							<div className="d-flex flex-row justify-content-end align-items-center h-100">
								<ExitSession />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</header>
	);
};

export default Header;
