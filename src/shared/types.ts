/**
 * Represents the data for the form.
 */
export interface FormData {
	[key: string]: { [subKey: string]: string };
}

/**
 * Represents form configuration
 */
export interface StepperFormConfig {
	label: string;
	key: string;
}

export type StepperConfig = Array<StepperFormConfig>;

export interface ParamsFormComponent {
	formData: any;
	changeHandler: (formControl: string, value: string) => void;
	error: any;
}

export type FieldError = {
	isValid: boolean;
	message: string;
};

export type FormError<T> = {
	[K in keyof T]: T[K] extends object ? FormError<T[K]> : FieldError;
};

export type ValidationFunction = (field: string) => {
	isValid: boolean;
	message: string;
};

export type FormValidators = {
	[key: string]: ValidationFunction;
};
