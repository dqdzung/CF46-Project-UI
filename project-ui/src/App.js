import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect, createContext } from "react";
import client from "./api";
import MainLayout from "./components/Layout/MainLayout";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Table from "./pages/Table/Table";
import Loading from "./components/Loading/Loading";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Protected from "./components/Route/Protected";

export const AuthContext = createContext();

function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			setLoading(false);
			return;
		}

		try {
			const res = await client({
				url: "/api/auth/user",
				method: "GET",
			});

			if (res.data.success) {
				setUser(res.data.data);
				setLoading(false);
			} else {
				setLoading(false);
			}
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className="App">
			{loading ? (
				<h1 className="test">
					<Loading />
				</h1>
			) : (
				<AuthContext.Provider value={{ user, setUser }}>
					<Router>
						<MainLayout>
							<Switch>
								<Protected path="/" exact>
									<Home></Home>
								</Protected>
								<Protected path="/create">
									<Create></Create>
								</Protected>
								<Protected path="/table/:id">
									<Table></Table>
								</Protected>
								<Route path="/login">
									<Login></Login>
								</Route>
								<Route path="/signup">
									<SignUp></SignUp>
								</Route>
								<Route path="*">
									<h1 className="test">404, nothing to see here!</h1>
								</Route>
							</Switch>
						</MainLayout>
					</Router>
				</AuthContext.Provider>
			)}
		</div>
	);
}

export default App;
