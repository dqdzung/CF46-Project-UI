import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/Layout/MainLayout";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Table from "./pages/Table/Table";

function App() {
	return (
		<div className="App">
			<Router>
				<MainLayout>
					<Switch>
						<Route path="/" exact>
							<Home></Home>
						</Route>
						<Route path="/create" exact>
							<Create></Create>
						</Route>
						<Route path="/table/:id" exact>
							<Table></Table>
						</Route>
					</Switch>
				</MainLayout>
			</Router>
		</div>
	);
}

export default App;
