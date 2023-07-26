import React from "react";
import Button from "./Button";
import "./App.css";

function App() {
	const [count, setCount] = React.useState(0);
	return (
		<>
			<h1>Remote</h1>
			<Button />
			<button onClick={() => setCount((count) => count + 1)}>
				Count is {count}
			</button>
		</>
	);
}

export default App;
