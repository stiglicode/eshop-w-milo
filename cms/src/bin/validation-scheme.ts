import * as yup from "yup";
import { FormInputsNames } from "./data-types/auth/enum";

const ValidationSchema__auth = yup.object({
	[FormInputsNames.NAME]: yup.string().required("Username is required"),
	[FormInputsNames.PASS]: yup
		.string()
		.min(6, "Password is too short")
		.required("Password is required"),
});

export { ValidationSchema__auth };
