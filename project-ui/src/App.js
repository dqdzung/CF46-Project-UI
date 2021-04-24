import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Create from "./pages/Create";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<h1>Home</h1>
					</Route>
					<Route path="/create" exact>
						<Create></Create>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
