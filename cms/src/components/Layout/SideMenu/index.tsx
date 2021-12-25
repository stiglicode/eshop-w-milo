import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import SVGSprite from "../../Sprite";
import {Paths} from "../../../bin/data-types/path/enum";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "../../../bin/state";
import {config_menu_expander} from "../../../bin/state/action-creators";
import {RootState} from "../../../bin/data-types/state/type";

const SideMenu = (): JSX.Element => {
	// Global states
	const dispatch = useDispatch();
	const {config_menu_expander} = bindActionCreators(actions, dispatch);
	const configMenuExpanderState = useSelector(
		(state: RootState) => state.configMenuExpander.status
	);

	// Local states
	const [currentPathName, setPathName] = useState("");

	useEffect(() => {
		console.log(currentPathName);
	});

	useEffect(() => {
		setPathName(window.location.pathname);
	}, [useLocation()]);

	const setActiveByPath = (
		activeClass: string,
		path: string
	): void | string => {
		if (currentPathName !== "" && currentPathName.split("/")[1] === path) {
			return activeClass;
		} else {
			return;
		}
	};

	const expandConfigMenu = () => {
		if (configMenuExpanderState === true) {
			return config_menu_expander({status: false});
		} else {
			return config_menu_expander({status: true});
		}

	};
	return (
		<aside
			className="custom-col custom-col--side_menu bg-light border-end d-flex justify-content-between flex-column">
			<div>
				<Link
					to="/settings"
					className={`side-menu_btn side-menu_btn-float ${setActiveByPath(
						"active",
						"settings"
					)}`}
				>
					<SVGSprite SvgName="settings"/>
				</Link>
			</div>
			<div>
				<Link
					to={`/${Paths.ORDERS}`}
					className={`side-menu_btn side-menu_btn-square border-bottom border-top ${setActiveByPath(
						"active",
						Paths.ORDERS
					)}`}
				>
					<SVGSprite SvgName="cart"/>
				</Link>
				<Link
					to={`/${Paths.STATS}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.STATS
					)}`}
				>
					<SVGSprite SvgName="chart"/>
				</Link>
				<Link
					to={`/${Paths.PRODUCTS}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.PRODUCTS
					)}`}
				>
					<SVGSprite SvgName="box"/>
				</Link>
				<Link
					to={`/${Paths.TODOLIST}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.TODOLIST
					)}`}
				>
					<SVGSprite SvgName="task-list"/>
				</Link>
				<Link
					to={`/${Paths.HISTORY}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.HISTORY
					)}`}
				>
					<SVGSprite SvgName="archive"/>
				</Link>
				<Link
					to={`/${Paths.MAILS}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.MAILS
					)}`}
				>
					<SVGSprite SvgName="envelope"/>
				</Link>
				<Link
					to={`/${Paths.CALCULATOR}`}
					className={`side-menu_btn side-menu_btn-square border-bottom ${setActiveByPath(
						"active",
						Paths.CALCULATOR
					)}`}
				>
					<SVGSprite SvgName="calculator"/>
				</Link>
			</div>
			<div>
				<Link
					to="/"
					className="side-menu_btn side-menu_btn-float side-menu_btn-logout"
				>
					<SVGSprite SvgName="door-closed"/>
				</Link>
			</div>
			<button
				className={`config-menu--expander ${configMenuExpanderState && "active"} border`}
				onClick={expandConfigMenu}
			>
				<SVGSprite SvgName="caret-right"/>
			</button>
		</aside>
	);
};

export default SideMenu;
