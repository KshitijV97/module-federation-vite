import useCount from "./store";
import "./Button.css";

const Button = () => {
	const [state, setState] = useCount(0);
	return (
		<div>
			<button className='shared-button' onClick={() => setState((s) => s + 1)}>
				Click me {state}
			</button>
		</div>
	);
};

export default Button;
