import { useState } from 'react';

export default function useForm(defaults) {
	const [values, setValues] = useState(defaults);

	function updateValue(e) {
		// Check if it's a number and convert
		let value = e.target.value;
		if (e.target.type === 'number') {
			value = parseInt(value);
		}
		setValues({
			// copy existing values into it
			...values,
			// update the new values that changed
			[e.target.name]: value,
		});
	}

	return { values, updateValue };
}
