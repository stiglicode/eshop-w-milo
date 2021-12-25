import React, { useState, useEffect } from "react";
import { Row, Button, Col, Card, Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

import { loginValidationSchema } from "../bin/authentication/validation.schema";
import formDataHandler from "../bin/authentication/data-handler";

const AuthLogin = props => {
	const [isLogged, setLoginStatus] = useState([null, null]);
	const [loggedUserID, setLoginingUserID] = useState("");

	const submitHandler = v => {
		return formDataHandler(v, [setLoginStatus, setLoginingUserID]);
	};

	useEffect(() => {
		return props.authenticatedStatus(isLogged);
	}, [isLogged]);

	useEffect(() => {
		return props.authenticatedID(loggedUserID);
	}, [loggedUserID]);

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
								onSubmit={submitHandler}
								validationSchema={loginValidationSchema}
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
														: ""
												} ${
													isLogged[0] === true
														? ""
														: isLogged[0] === false
														? "is-invalid"
														: ""
												}`}
											/>
											{errors.username && touched.username ? (
												<div className="form-text text-danger">
													{errors.username}
												</div>
											) : isLogged[0] === false ? (
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
														: ""
												} ${
													isLogged[1] === true
														? ""
														: isLogged[1] === false
														? "is-invalid"
														: ""
												}`}
											/>
											{errors.password && touched.password ? (
												<div id="emailHelp" className="form-text text-danger">
													{errors.password}
												</div>
											) : isLogged[1] === false ? (
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
