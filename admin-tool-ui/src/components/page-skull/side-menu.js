import React from "react";
import { Nav, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import profileImage from "../../assets/ico/placeholder/profile-96x96.png";
import { darkModeClass } from "../dark-mode";
import { OrederSideMenu } from "../views/order.view";

const SideMenu = props => {
	return (
		<nav className="side-menu border-right">
			<div
				className={`${darkModeClass(
					props.darkMode
				)} d-flex flex-column flex-shrink-0 p-3 h-100`}
			>
				<span className="cms-logo-padd d-flex flex-row align-items-center">
					<svg
						id="bootstrap"
						viewBox="0 0 118 94"
						width="40"
						height="32"
						role="img"
						aria-label="Bootstrap"
						className="bi me-2"
					>
						<title>Bootstrap</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
						></path>
					</svg>
					<h3 className="heading-light ml-2 mb-0">
						Lightway&nbsp;<strong>CMS</strong>
					</h3>
				</span>
				<hr />
				<div className="mb-3"></div>
				<OrederSideMenu />
				<hr />
				<div className="d-flex flex-row justify-content-between">
					<div className="d-flex flex-row justify-content-start align-items-center">
						<Link
							to="/"
							className="d-block link-dark text-decoration-none d-flex justify-content-center align-items-center mr-5"
						>
							<img
								src={profileImage}
								alt="mdo"
								width="35"
								height="35"
								className="rounded-circle mr-2 bg-secondary"
							/>
							<span className=" first-upper btn-hoverd">{props.user.name}</span>
						</Link>
					</div>
					<Button variant="outline-info">Export</Button>
				</div>
			</div>
		</nav>
	);
};

export default SideMenu;
