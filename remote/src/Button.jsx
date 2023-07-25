import { useState } from "react";

export const Button = () => {
	const [state, setState] = useState(0);
	return (
		<div>
			<button className='shared-button' onClick={() => setState((s) => s + 1)}>
				Click me {state}
			</button>
		</div>
	);
};