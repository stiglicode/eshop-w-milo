import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Card,
	FormGroup,
	FormLabel,
	Button,
	Col,
} from "react-bootstrap";
import { Formik, FormikHelpers, Field, Form } from "formik";
import { AuthDataObject } from "../bin/data-types/auth/type";
import { FormInputsNames, ServerFormKeys } from "../bin/data-types/auth/enum";
import { ValidationSchema__auth } from "../bin/validation-scheme";
import {
	client_ERROR_handler,
	validServerErrors,
} from "../bin/errors/auth-input-validation";
import { LoginAuth } from "../bin/fetch/post-fetch";
import { actions } from "../bin/state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { InitUserAuth } from "../bin/fetch/get-fetch";

const Auth = (): JSX.Element => {
	// Global states
	const dispatch = useDispatch();
	const { user_auth } = bindActionCreators(actions, dispatch);
	let componentWillUnmount = false;

	// Local states
	const [initSignAuth, setInitSignAuth] = useState([true, true]);
	const [server, setServerErrorsHandler] = useState({
		errors: { [ServerFormKeys.NAME]: "", [ServerFormKeys.PASS]: "" },
		touched: { [ServerFormKeys.NAME]: true, [ServerFormKeys.PASS]: true },
	});

	useEffect(() => {
		setServerErrorsHandler(validServerErrors(initSignAuth));
		return () => {
			if(componentWillUnmount === false) {
				componentWillUnmount = true;
				location.reload();
			}
		};
	}, [initSignAuth]);
	useEffect(() => {
		componentWillUnmount = true;
	}, []);


	const handleSubmit = (
		values: AuthDataObject<string>,
		{ setSubmitting }: FormikHelpers<AuthDataObject<string>>
	) => {
		setTimeout(async () => {
			const formValues = {
				[ServerFormKeys.NAME]: values.login_name,
				[ServerFormKeys.PASS]: values.login_password,
			};
			const invalid_validation = new LoginAuth(
				"/api/auth/profile",
				"someApi",
				{
					[ServerFormKeys.NAME]: formValues[ServerFormKeys.NAME],
					[ServerFormKeys.PASS]: formValues[ServerFormKeys.PASS],
				},
				setInitSignAuth
			);

			const set_authentication = new InitUserAuth(user_auth);

			await invalid_validation.request();
			await set_authentication.request();
			return setSubmitting(false);
		}, 300);
	};
	return (
		<Container>
			<Row className="auth-form--card justify-content-center align-items-center">
				<Col xs="12" lg="5">
					<Card>
						<Card.Body>
							<Card.Title className="text-center">
								<h3>Login</h3>
							</Card.Title>
							<Card.Subtitle className="text-center">
								E-Shop CMS
							</Card.Subtitle>
							<Formik
								initialValues={{
									[FormInputsNames.NAME]: "",
									[FormInputsNames.PASS]: "",
								}}
								onSubmit={handleSubmit}
								validationSchema={ValidationSchema__auth}
							>
								{({ errors, touched }) => (
									<Form autoComplete="off">
										<FormGroup className="d-flex flex-column">
											<FormLabel
												htmlFor={FormInputsNames.NAME}
												className="fw-light text-muted"
											>
												User name
											</FormLabel>
											<Field
												name={FormInputsNames.NAME}
												id={FormInputsNames.NAME}
												type="text"
												placeholder="Enter Username"
												className={`form-control ${
													client_ERROR_handler(
														errors[
															FormInputsNames.NAME
														],
														touched[
															FormInputsNames.NAME
														]
													)
														? "is-invalid"
														: ""
												} ${
													client_ERROR_handler(
														server.errors[
															ServerFormKeys.NAME
														],
														server.touched[
															ServerFormKeys.NAME
														]
													)
														? "is-invalid"
														: ""
												}`}
											/>

											{client_ERROR_handler(
												errors[FormInputsNames.NAME],
												touched[FormInputsNames.NAME]
											)}

											{client_ERROR_handler(
												server.errors[
													ServerFormKeys.NAME
												],
												server.touched[
													ServerFormKeys.NAME
												]
											)}
										</FormGroup>
										<FormGroup className="d-flex flex-column mt-3">
											<FormLabel
												htmlFor={FormInputsNames.PASS}
												className="fw-light text-muted"
											>
												Password
											</FormLabel>
											<Field
												name={FormInputsNames.PASS}
												id={FormInputsNames.PASS}
												type="password"
												placeholder="Enter Password"
												className={`form-control ${
													client_ERROR_handler(
														errors[
															FormInputsNames.PASS
														],
														touched[
															FormInputsNames.PASS
														]
													)
														? "is-invalid"
														: ""
												} ${
													client_ERROR_handler(
														server.errors[
															ServerFormKeys.PASS
														],
														server.touched[
															ServerFormKeys.PASS
														]
													)
														? "is-invalid"
														: ""
												}`}
											/>
											{client_ERROR_handler(
												errors[FormInputsNames.PASS],
												touched[FormInputsNames.PASS]
											)}

											{client_ERROR_handler(
												server.errors[
													ServerFormKeys.PASS
												],
												server.touched[
													ServerFormKeys.PASS
												]
											)}
										</FormGroup>
										<div className="d-grid mt-4">
											<Button type="submit">
												Sign in
											</Button>
										</div>
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

export default Auth;
