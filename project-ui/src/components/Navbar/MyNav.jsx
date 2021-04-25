import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container>
					<Link to="/">
						<Navbar.Brand>Navbar</Navbar.Brand>
					</Link>
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
				</Container>
			</Navbar>
		</div>
	);
};

export default MyNav;
