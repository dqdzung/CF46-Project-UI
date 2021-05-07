import MyNav from "../Navbar/MyNav";
import Footer from "../Footer/Footer";

const MainLayout = (props) => {
	return (
		<div>
			<MyNav></MyNav>
			{props.children}
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
