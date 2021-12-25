import React from "react";
import Table from "./../../components/Table";

const ProductsScene = () => {
	return (
		<>
			<div className="main-content_header">
				<div>
					<span>
						<strong>Total orders:&nbsp;</strong>
						15
					</span>
					<span>
						<strong>New orders:&nbsp;</strong>
						15
					</span>
					<span>
						<strong>In progress orders:&nbsp;</strong>
						15
					</span>
					<span>
						<strong>Finished orders:&nbsp;</strong>
						15
					</span>
				</div>
				<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
					{/* eslint-disable no-mixed-spaces-and-tabs */}
					<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
					<label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

					<input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
					<label className="btn btn-outline-primary" htmlFor="btnradio2">New</label>

					<input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
					<label className="btn btn-outline-primary" htmlFor="btnradio3">Done</label>

					<input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
					<label className="btn btn-outline-primary" htmlFor="btnradio4">In progress</label>
					{/*	 eslint-enabled */}
				</div>
			</div>
			<div className="main-content_body">
				<Table/>
			</div>
		</>
	);
};

export default ProductsScene;