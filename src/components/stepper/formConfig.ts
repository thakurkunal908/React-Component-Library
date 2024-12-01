import { FormData, FormError, FormValidators, StepperConfig } from "../../shared/types";

export const Validators: FormValidators = {
	firstName: (field: string) => {
		const isValid = field.trim().length > 0;
		const message = isValid ? "" : "First name is required.";
		return { isValid, message };
	},
	lastName: (field: string) => {
		const isValid = field.trim().length > 0;
		const message = isValid ? "" : "Last name is required.";
		return { isValid, message };
	},
	street: (field: string) => {
		const isValid = field.trim().length > 0;
		const message = isValid ? "" : "Street is required.";
		return { isValid, message };
	},
	city: (field: string) => {
		const isValid = field.trim().length > 0;
		const message = isValid ? "" : "City is required.";
		return { isValid, message };
	},
	state: (field: string) => {
		const isValid = field.trim().length > 0;
		const message = isValid ? "" : "State is required.";
		return { isValid, message };
	},
	pincode: (field: string) => {
		const isValid = /^[0-9]{6}$/.test(field); // Example validation for Indian pincode
		const message = isValid
			? ""
			: "Pincode must be a 6-digit number.";
		return { isValid, message };
	},
};

export const formData: FormData = {
	personalDetails: {
		firstName: "",
		lastName: "",
	},
	address: {
		street: "",
		city: "",
		state: "",
		pincode: "",
	},
	payments:{
		card: "",
		pin: "",
	}
};

export const FormErrorList: FormError<FormData> = {
	personalDetails: {
		firstName: { isValid: true, message: "" },
		lastName: { isValid: true, message: "" },
	},
	address: {
		street: { isValid: true, message: "" },
		city: { isValid: true, message: "" },
		state: { isValid: true, message: "" },
		pincode: { isValid: true, message: "" },
	},
	payments:{
		card: { isValid: true, message: "" },
		pin: { isValid: true, message: "" },
	}
};

export const STEPPER_CONFIG: StepperConfig = [
	{
		key: "personalDetails",
		label: "Personal Details",
	},
	{
		key: "address",
		label: "Address",
	},
	{
		key: 'payments',
		label: 'Payments',
	}
];