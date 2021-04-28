import AuthLayout from "../../components/Layout/AuthLayout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import client from "../../api";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passConfirm, setPassConfirm] = useState("");
	const [message, setMessage] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePassChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePassConfirm = (e) => {
		setPassConfirm(e.target.value);
		validate(password, e.target.value);
	};

	const validate = (password, passwordConfirm) => {
		let isMatched = password === passwordConfirm;
		if (!isMatched) {
			setMessage("Password doesn't match!");
		} else {
			setMessage("");
		}
		return isMatched;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!message) {
			try {
				const res = await client({
					url: "/api/auth/signup",
					method: "POST",
					data: {
						email,
						password,
					},
				});
				if (res.data.success) {
					alert("Sign up successfully!!!");
					clearInput();
				}
			} catch (err) {
				return err.message;
			}
		}
	};

	const clearInput = () => {
		setEmail("");
		setPassword("");
		setPassConfirm("");
	};

	return (
		<AuthLayout>
			<div className="form-wrapper">
				<h3 className="text-center">Sign Up</h3>
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
					<Form.Group controlId="formBasicPasswordConfirm">
						<Form.Label>Password Confirmation</Form.Label>
						<Form.Control
							type="password"
							placeholder="Re-enter password"
							value={passConfirm}
							onChange={handlePassConfirm}
						/>
					</Form.Group>
					<span style={{ color: "red" }}>{message}</span>
					<Button
						className="mt-4"
						variant="success"
						type="submit"
						block
						disabled={message}
					>
						Sign Up
					</Button>
				</Form>
				<div className="navigate mt-3">
					Already have an account? <Link to="/login">Login</Link>
				</div>
			</div>
		</AuthLayout>
	);
};

export default SignUp;
