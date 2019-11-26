import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<pre>Dockerized React App</pre>

				<ul>
					<li>
						<pre> Build: docker-compose -f docker-compose.yml build</pre>
					</li>
					<li>
						<pre>Run: docker-compose -f docker-compose.yml up</pre>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default App;
