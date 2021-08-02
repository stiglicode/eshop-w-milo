import React, { useEffect, useState } from "react";
import {
	Button,
	ButtonGroup,
	Col,
	Nav,
	Row,
	ToggleButton,
	Table,
} from "react-bootstrap";

import axios from "axios";

const toDayDate = () => {
	const date = new Date().toJSON().slice(0, 10);
	const clearUp = date.split("-");

	return `${clearUp[2]}.${clearUp[1]}.${clearUp[0]}`;
};

const OrderView = () => {
	const [testDataState, setTestDataState] = useState();

	const testDATA = () => {
		const fetchInfo = {
			url: "http://localhost",
			port: "2211",
			path: "api/orders",
			headers: {
				h: {
					"Content-Type": "application/json",
				},
				api: "902b01087749415b673e27e8824e28736d9500802fe069218f273417084f413acf45733ce9507aa703aa881b6f941f48fe256cb7589285b7d45f10330cee81b4",
			},
		};
		axios
			.get(
				`${fetchInfo.url}:${fetchInfo.port}/${fetchInfo.path}?api_key=${fetchInfo.headers.api}`,
				{
					headers: fetchInfo.headers.h,
				}
			)
			.then(res => setTestDataState(res.data))
			.catch(error => console.log(error.response));
	};

	useEffect(() => {
		if (!testDataState) {
			testDATA();
		}
	}, []);

	useEffect(() => {
		if (testDataState) {
			console.log(JSON.stringify(testDataState[0]));
		}
	}, [testDataState]);
	return (
		<Row>
			<Col xs="12">
				<div className="mt-3 d-flex flex-row">
					<h2 className="h2 mb-0 mr-auto">
						All orders
						<small className="text-muted">
							<small>&nbsp;&nbsp;as of&nbsp;{toDayDate()}</small>
						</small>
					</h2>
					<ButtonGroup toggle>
						<ToggleButton
							type="checkbox"
							variant="outline-success"
							className="mr-2"
						>
							Done
						</ToggleButton>
						<ToggleButton
							type="checkbox"
							variant="outline-primary"
							className="mr-2"
						>
							In progress
						</ToggleButton>
					</ButtonGroup>
				</div>
				<hr />
			</Col>
			<Col xs="12">
				<Table striped hover className="mt-3 text-info">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</Col>
		</Row>
	);
};

const SortBadge = props => {
	return (
		<span
			className="badge bg-info text-light py-2 px-2 hover-delete"
			onClick={props.onClick}
		>
			{props.value}
		</span>
	);
};

const OrederSideMenu = () => {
	const [radioValue, setRadioValue] = useState({});

	const [toggleClick, setToggleClick] = useState(false);

	const handleRadio = r => {
		setRadioValue({
			name: r.currentTarget.children[0].nextSibling.data,
			value: +r.currentTarget.children[0].value,
		});
		return setToggleClick(true);
	};

	const resetRadio = () => {
		setRadioValue({
			name: false,
			value: 0,
		});
		return setToggleClick(false);
	};

	return (
		<Nav as="ul" className="nav-pills flex-column mb-auto">
			<Nav.Item as="li" className="mb-3 d-flex flex-row align-items-center">
				<strong>Sort&nbsp;by</strong>
				<hr
					className={`ml-2 w-100 my-0 ${radioValue.name ? "mr-2" : "mr-4"}`}
				/>
				{radioValue.name && (
					<SortBadge value={radioValue.name} onClick={resetRadio} />
				)}
			</Nav.Item>
			<Nav.Item as="li" className="mb-2">
				<ButtonGroup toggle className="w-100">
					<ToggleButton
						type="radio"
						variant="outline-info"
						className="mr-2"
						value="1"
						onClick={handleRadio}
						checked={radioValue.value === 1}
					>
						Last hour
					</ToggleButton>
				</ButtonGroup>
			</Nav.Item>
			<Nav.Item as="li" className="mb-2">
				<ButtonGroup toggle className="w-100">
					<ToggleButton
						type="radio"
						variant="outline-info"
						className="mr-2"
						value="2"
						onClick={handleRadio}
						checked={radioValue.value === 2}
					>
						Last day
					</ToggleButton>
				</ButtonGroup>
			</Nav.Item>
			<Nav.Item as="li" className="mb-2">
				<ButtonGroup toggle className="w-100">
					<ToggleButton
						type="radio"
						variant="outline-info"
						className="mr-2"
						value="3"
						onClick={handleRadio}
						checked={radioValue.value === 3}
					>
						Last week
					</ToggleButton>
				</ButtonGroup>
			</Nav.Item>
			<Nav.Item as="li" className="mb-2">
				<ButtonGroup toggle className="w-100">
					<ToggleButton
						type="radio"
						variant="outline-info"
						className="mr-2"
						value="4"
						onClick={handleRadio}
						checked={radioValue.value === 4}
					>
						Last month
					</ToggleButton>
				</ButtonGroup>
			</Nav.Item>
			<Nav.Item as="li">
				<ButtonGroup toggle className="w-100">
					<ToggleButton
						type="radio"
						variant="outline-info"
						className="mr-2"
						value="5"
						onClick={handleRadio}
						checked={radioValue.value === 5}
					>
						Last year
					</ToggleButton>
				</ButtonGroup>
			</Nav.Item>
			<Nav.Item
				as="li"
				className="mb-3 mt-4 d-flex flex-row align-items-center"
			>
				<strong>Editor</strong>
				<hr className="ml-2 w-100 my-0 mr-4" />
			</Nav.Item>
			<Nav.Item
				as="li"
				className="mb-3 mt-4 d-flex flex-row align-items-center"
			>
				<strong>Save&nbsp;as</strong>
				<hr className="ml-2 w-100 my-0 mr-4" />
			</Nav.Item>
			<Nav.Item as="li" className="mb-3 d-flex flex-row align-items-center">
				<Button variant="outline-info" className="w-100">
					Print
				</Button>
				<Button variant="outline-secondary" className="w-100 ml-2">
					PDF
				</Button>
				<Button variant="outline-secondary" className="w-100 ml-2">
					Excel
				</Button>
			</Nav.Item>
		</Nav>
	);
};

export { OrderView, OrederSideMenu };
