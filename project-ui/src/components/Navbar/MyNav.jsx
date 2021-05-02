import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "./icon.png";
import { useContext } from "react";
import { AuthContext } from "../../App";

const MyNav = () => {
	const { user, setUser } = useContext(AuthContext);
	return (
		<div>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<img
							src={icon}
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</Navbar.Brand>
					{!user ? (
						<Nav className="mr-auto">
							<Nav.Item className="mx-2 ">
								<Link to="/login" className="text-muted">
									Login
								</Link>
							</Nav.Item>
							<Nav.Item className="mx-2 text-decoration-none">
								<Link to="/signup" className="text-muted">
									Sign Up
								</Link>
							</Nav.Item>
						</Nav>
					) : (
						<>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav.Item className="mr-2  ">
									<Link to="/">
										<Navbar.Text>Home</Navbar.Text>
									</Link>
								</Nav.Item>
								<Nav.Item>
									<Link to="/create">
										<Navbar.Text>Create</Navbar.Text>
									</Link>
								</Nav.Item>
							</Navbar.Collapse>
						</>
					)}
				</Container>
			</Navbar>
		</div>
	);
};

export default MyNav;
