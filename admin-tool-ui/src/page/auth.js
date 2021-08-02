import React, { useState, useEffect } from "react";
import { Row, Button, Col, Card, Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { getAuthData, setLog } from "../bin/authentication/login.auth";
import userValidtion from "../bin/authentication/validation.auth";

const AuthLogin = props => {
	const [logged, setLogin] = useState();
	const [dbValidation, setDbValidation] = useState([true, true]);

	useEffect(() => {
		getAuthData(setLogin);
	}, [logged]);

	useEffect(() => {
		if (window.localStorage.getItem("a-key")) {
			return (window.location.pathname = "/");
		}
	}, []);

	const formSubmitHandler = async values => {
		const inputAuth = {
			name: values.username,
			pass: values.password,
		};

		const uniq = `li${logged._id}kn${Math.floor(
			Math.random() * (999 * 100000 - 999 * 10000) + 999 * 10000
		)}${Math.floor(
			Math.random() * (999 * 100000 - 999 * 10000) + 999 * 10000
		)}`;

		if (userValidtion(inputAuth, logged, setDbValidation).ok) {
			setLog(logged._id, uniq);
			window.localStorage.setItem("a-key", uniq);
			return (window.location.pathname = "/");
		}
	};

	const validationSchema = yup.object({
		username: yup.string().required("Username is required"),
		password: yup
			.string()
			.min(6, "Password is too short")
			.required("Password is required"),
	});

	return (
		<Container>
			<Row className="justify-content-center from-wrapper">
				<Col xs="12" lg="5">
					<Card>
						<Card.Body>
							<Card.Title className="text-center">
								<h3>Login</h3>
							</Card.Title>
							<Card.Subtitle className="text-center mb-4">
								E-Shop Administration
							</Card.Subtitle>
							<Formik
								initialValues={{
									username: "",
									password: "",
								}}
								onSubmit={formSubmitHandler}
								validationSchema={validationSchema}
							>
								{({ errors, touched }) => (
									<Form>
										<div className="mb-3">
											<label
												htmlFor="username"
												className="form-label fw-light text-muted"
											>
												Username
											</label>
											<Field
												id="username"
												name="username"
												type="text"
												placeholder="Enter Username"
												className={`form-control ${
													errors.username && touched.username
														? "is-invalid"
														: null
												} ${dbValidation[0] ? null : "is-invalid"}`}
											/>
											{errors.username && touched.username ? (
												<div className="form-text text-danger">
													{errors.username}
												</div>
											) : null}
											{!dbValidation[0] ? (
												<div className="form-text text-danger">
													Inccorect username
												</div>
											) : null}
										</div>
										<div className="mb-3">
											<label
												htmlFor="password"
												className="form-label fw-light text-muted"
											>
												Password
											</label>
											<Field
												id="password"
												name="password"
												type="password"
												placeholder="Enter Password"
												className={`form-control ${
													errors.password && touched.password
														? "is-invalid"
														: null
												} ${dbValidation[1] ? null : "is-invalid"}`}
											/>
											{errors.password && touched.password ? (
												<div id="emailHelp" className="form-text text-danger">
													{errors.password}
												</div>
											) : null}
											{!dbValidation[1] ? (
												<div className="form-text text-danger">
													Inccorect password
												</div>
											) : null}
										</div>
										<Button type="submit" block>
											Sign in
										</Button>
									</Form>
								)}
							</Formik>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AuthLogin;
