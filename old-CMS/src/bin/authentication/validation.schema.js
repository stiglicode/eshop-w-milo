import * as yup from "yup";

const loginValidationSchema = yup.object({
	username: yup.string().required("Username is required"),
	password: yup
		.string()
		.min(6, "Password is too short")
		.required("Password is required"),
});

export { loginValidationSchema };
