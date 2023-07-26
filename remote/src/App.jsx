import React from "react";
import Button from "./Button";
import "./App.css";
import useCount from "./store";

function App() {
	const [count, setCount] = useCount(0);
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
