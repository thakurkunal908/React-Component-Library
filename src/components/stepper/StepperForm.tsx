import {
	ParamsFormComponent,
	FormData,
	FormError,
} from "../../shared/types";
import { FormEvent, useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import { Validators, formData, FormErrorList, STEPPER_CONFIG } from "./formConfig";

const StepperForm = () => {
	const [data, setFormData] = useState<FormData>(formData);
	const [index, setIndex] = useState<number>(0);
	const [error, setError] = useState<FormError<FormData>>(FormErrorList);

	const form = STEPPER_CONFIG[index];
	const stepKey = form.key;

	const changeHandler = (formControlName: string, value: string) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[stepKey]: {
				...prevFormData[stepKey],
				[formControlName]: value,
			},
		}));
	};

	const validateForm = () => {
		const stepKey = form.key;
		const error: {
			[key: string]: { isValid: boolean; message: string };
		} = {};
		Object.entries(data[stepKey])?.forEach(([key, value]) => {
			error[key] = Validators[key]?.(value);
		});
		setError((prevError: FormError<FormData>) => ({
			...prevError,
			[stepKey]: { ...prevError[stepKey], ...error },
		}));
		let isValid = true;

		// Check if inputs of current forms are valid.
		Object.keys(error).forEach((key)=>{
			isValid = isValid && error[key]?.isValid;
		})
		return isValid;
	};

	const currentProp: ParamsFormComponent = {
		formData: data[form.key],
		changeHandler,
		error: error[stepKey],
	};

	const isLastForm = () => index === STEPPER_CONFIG.length - 1;

	const isFirstForm = () => index === 0;

	const next = () => {
	    const isValidForm = validateForm();
		if (isLastForm()) return;
		if(isValidForm){
			setIndex((index) => index + 1);
		}
	};

	const prev = () => {
		if (isFirstForm()) return;
		setIndex((index) => index - 1);
	};

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
		e.preventDefault();
		console.log(data);
	}

	useEffect(()=>{
		validateForm();
	},[index])

	return (
		<div className="stepper-form">
			<div className="header">
			    <h2>{form.label}</h2>
				<span>{index + 1} / {STEPPER_CONFIG.length}</span>
			</div>
			<div>
			  <hr/>
			</div>
			<form onSubmit={(event)=>handleSubmit(event)}>
				<div className="form-content">
					<FormComponent {...currentProp} />
				</div>
			</form>
			<div className="footer">
				{!isFirstForm() && (
					<button onClick={prev}>Prev</button>
				)}

				{!isLastForm() && (
					<button
						onClick={next}
					>
						Next
					</button>
				)}
				{isLastForm() && (
					<button onClick={next}>Submit</button>
				)}
			</div>
		</div>
	);
};

export default StepperForm;
