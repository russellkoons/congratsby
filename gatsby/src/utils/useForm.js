import { useState } from 'react';

export default function useForm(defaults) {
	const [values, setValues] = useState(defaults);

	function updateValue(e) {
		setValues({
			// copy existing values into it
			...values,
			// update the new values that changed
			[e.target.name]: e.target.value,
		});
	}
}
