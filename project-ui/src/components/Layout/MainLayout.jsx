import MyNav from "../Navbar/MyNav";
import Footer from "../Footer/Footer";

const MainLayout = (props) => {
	return (
		<>
			<MyNav></MyNav>
			{props.children}
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
