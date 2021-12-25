import React from "react";
import SVGSprite from "../Sprite";
import SearchInput from "./Search";

const MainHeader = (): JSX.Element => {
	return (
		<header
			className="shadow-sm bg-light border-bottom main-header d-flex flex-row justify-content-between align-items-center px-4 py-3">
			<div className="main-header_start-box border-end pe-4 h-100">
				<div className="main-header_box-row">
					<div className="main-header_start-box--theme">
						<div className="form-check form-switch d-flex flex-row align-items-center">
							<input
								className="form-check-input"
								type="checkbox"
								id="flexSwitchCheckDefault"
							/>
						</div>
					</div>
				</div>
				<div className="main-header_box-row">
					<a href="#" className="main-header_start-box--notification">
						<SVGSprite SvgName="bell"/>
					</a>
				</div>
			</div>
			<div className="main-header_center-box">
				<SearchInput/>
			</div>
			<div className="main-header_end-box border-start ps-4 h-100">
				<div className="main-header_end-box--account">
					<SVGSprite SvgName="user-circle"/>
					<span>User name</span>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;