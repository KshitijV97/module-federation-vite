import React from "react";
import "./App.css";
import Button from "remoteApp/Button"; // `remoteApp` is substituted by Configuration

function App() {
	const [count, setCount] = React.useState(0);

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
