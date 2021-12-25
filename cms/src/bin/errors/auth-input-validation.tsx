import React from "react";
import { FormText } from "react-bootstrap";
import { ServerFormKeys } from "../data-types/auth/enum";

const client_ERROR_handler = (
	ERRORS?: string,
	TOUCHED?: boolean,
	TEXT?: string
): JSX.Element | string | void => {
	if (ERRORS && TOUCHED) {
		if (!TEXT) {
			return (
				<FormText className="text-danger faded-in__from-top">
					{ERRORS}
				</FormText>
			);
		} else {
			return TEXT;
		}
	}
};

const validServerErrors = (
	errLog: boolean[]
): {
	errors: {
		[ServerFormKeys.NAME]: string;
		[ServerFormKeys.PASS]: string;
	};
	touched: {
		[ServerFormKeys.NAME]: boolean;
		[ServerFormKeys.PASS]: boolean;
	};
} => {
	const mess = {
		[ServerFormKeys.NAME]: "Username is invalid!",
		[ServerFormKeys.PASS]: "Password is invalid!",
	};
	return {
		errors: {
			[ServerFormKeys.NAME]: mess[ServerFormKeys.NAME],
			[ServerFormKeys.PASS]: mess[ServerFormKeys.PASS],
		},
		touched: {
			[ServerFormKeys.NAME]:
				errLog[0] === true ? false : errLog[0] === false && true,
			[ServerFormKeys.PASS]:
				errLog[1] === true ? false : errLog[1] === false && true,
		},
	};
};

export { client_ERROR_handler, validServerErrors };
