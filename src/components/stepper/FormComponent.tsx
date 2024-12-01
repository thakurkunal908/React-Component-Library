import { useState } from "react";
import { ParamsFormComponent } from "../../shared/types";
import {camelToTitle} from '../../shared/utils';

const FormComponent = ({
	formData,
	changeHandler,
	error,
}: ParamsFormComponent) => {
	/**
	 * State to manage the "touched" status of form controls.
	 * 
	 * - The `inputState` object contains keys corresponding to form control names
	 *   and boolean values indicating whether each control has been touched.
	 * 
	 * @example
	 * // Initial state:
	 * inputState = {};
	 * 
	 * @example
	 * // After setting the state:
	 * inputState = { email: true, password: false };
	 */
	const [inputState, setInputState] = useState<{ [key: string]: boolean }>({});


	/**
	 * Checks if a specific form control has been touched.
	 * 
	 * @param {string} formControl - The name of the form control to check.
	 * @returns {boolean} - `true` if the form control has been touched, otherwise `false`.
	 * 
	 * @example
	 * // Assuming inputState = { email: true, password: false }
	 * isTouched("email");
	 * // Returns: true
	 * 
	 * @example
	 * isTouched("password");
	 * // Returns: false
	 */
	const isTouched = (formControl: string): boolean => {
		return inputState[formControl];
	};

	/**
	 * Marks a specific form control as touched by updating its state.
	 * 
	 * @param {string} formControl - The name of the form control to update.
	 * 
	 * @example
	 * // Before: inputState = { email: false }
	 * setFormControlState("email");
	 * // After: inputState = { email: true }
	 */
	const setFormControlState = (formControl: string): void => {
		setInputState((inputState) => ({ ...inputState, [formControl]: true }));
	};

	return (
		<div>
			{Object.keys(formData).map((formControl) => {
				return (
					<div
						className="form-control"
						key={formControl}
					>
						<label htmlFor={formControl}>
							{camelToTitle(formControl)} {" : "}
						</label>
						<input
							id={formControl}
							type="text"
							name={formControl}
							value={
								formData[
									formControl
								]
							}
							onChange={(e) =>
								changeHandler(
									formControl,
									e.target
										?.value
								)
							}
							onBlur={()=>setFormControlState(formControl)}
						/>
						{ isTouched(formControl) && 
							<span className="error-message">
								{
									error[
										formControl
									]?.message
								}
							</span>
			            }
					</div>
				);
			})}
		</div>
	);
};

export default FormComponent;
