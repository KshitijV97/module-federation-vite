import React from "react";
import "./App.css";
import useStore from "remoteApp/store";

const FederatedButton = React.lazy(() => import("remoteApp/Button"));

function App() {
	const [count, setCount] = useStore(0);

	return (
		<>
			<h1>Host application</h1>
			<div className='card'>
				<React.Suspense fallback={<h1>Loading federated module....</h1>}>
					<FederatedButton />
				</React.Suspense>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
