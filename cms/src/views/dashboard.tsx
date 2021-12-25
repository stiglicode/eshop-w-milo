import React from "react";
import SideMenu from "../components/Layout/SideMenu";
import ConfigMenu from "../components/Layout/ConfigMenu";
import MainContent from "../components/Layout/MainContent";
import {useLocation} from "react-router-dom";

const Dashboard = (): JSX.Element => {
	return (
		<>
			<div className="bg-secondary text-light pt-2 pb-2 shadow dashboard-header">
				<h5 className="text-center mb-0 heading-light" title="CMS for Patres eshop">Company name - <span
					className="header-pathname">{useLocation().pathname.substring(1).replace("-", " ")}</span></h5>
			</div>
			<div className="custom-row">
				<SideMenu/>
				<ConfigMenu/>
				<MainContent/>
			</div>
		</>
	);
};

export default Dashboard;
