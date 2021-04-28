import AuthLayout from "../../components/Layout/AuthLayout";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import client from "../../api";
import { AuthContext } from "../../App";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const { setUser } = useContext(AuthContext);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await client({
			url: "api/auth/login",
			method: "POST",
			data: {
				email,
				password,
			},
		});
		if (res.data.success) {
			const { user, token } = res.data.data;
			localStorage.setItem("token", token);
			setUser(user);
			history.push("/");
		} else {
			alert("Wrong Email or Password!!!");
		}
	};

	return (
		<AuthLayout>
			<div className="form-wrapper">
				<h3 className="text-center">Login</h3>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={handleEmailChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={handlePassChange}
						/>
					</Form.Group>
					<Button className="mt-4" variant="primary" type="submit" block>
						Login
					</Button>
				</Form>
				<div className="navigate mt-3">
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</div>
			</div>
		</AuthLayout>
	);
};

export default Login;
