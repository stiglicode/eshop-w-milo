import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	Col,
	Nav,
	Row,
	ToggleButton,
	Table,
} from "react-bootstrap";

const toDayDate = () => {
	const date = new Date().toJSON().slice(0, 10);
	const clearUp = date.split("-");

	return `${clearUp[2]}.${clearUp[1]}.${clearUp[0]}`;
};

const OrderView = () => {
	// const f = () => {
	// 	const raw = testDataState && testDataState[0].createdAt.split("T");
	// 	if (raw) {
	// 		const clearUp = raw[0].split("-");
	// 		return `${clearUp[2]}-${clearUp[1]}-${clearUp[0]}`;
	// 	}
	// };
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
							<th>Product name</th>
							<th>Customer name</th>
							<th>Ceated at</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{/* <tr class="text-success">
							<td>{testDataState && testDataState[0]._id}</td>
							<td>Palceholder name</td>
							<td>
								{testDataState && testDataState[0].billing_details.customerName}
							</td>
							<td>{f()}</td>
							<td>
								{testDataState && testDataState[0].product_details.totalPrice}{" "}
								&#8364;
							</td>
							<td>{testDataState && testDataState[0].status}</td>
						</tr> */}
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
