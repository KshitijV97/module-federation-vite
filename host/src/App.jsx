import React from "react";
import "./App.css";
import Button from "remoteApp/Button"; // `remoteApp` is substituted by Configuration
import useStore from "remoteApp/store";

function App() {
	const [count, setCount] = useStore(0);

	return (
		<>
			<h1>Host application</h1>
			<div className='card'>
				<Button />
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
