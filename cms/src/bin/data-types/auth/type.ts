import { FormInputsNames } from "./enum";

interface AuthData<S> {
	[FormInputsNames.NAME]: S;
	[FormInputsNames.PASS]: S;
}

export type AuthDataObject<S> = AuthData<S>;
