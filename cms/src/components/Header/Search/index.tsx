import React from "react";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import SVGSprite from "../../Sprite";

const SearchInput = (): JSX.Element => {
	return (
		<Formik
			initialValues={{
				searchValue: ""
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validationSchema={yup.object({
				searchValue: yup.string()
			})}
		>
			{({errors, touched}) => (
				<Form className="header_search-wrapper" autoComplete="off">
					{/* eslint-disable no-mixed-spaces-and-tabs */}
					<Field type="text"
					       name="searchValue"
					       className="header_search-input"
					       placeholder="Search..."
					       required
					/>
					{/* eslint-enable */}
					<button type="submit" className="header_search-submit">
						<SVGSprite SvgName="search"/>
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SearchInput;