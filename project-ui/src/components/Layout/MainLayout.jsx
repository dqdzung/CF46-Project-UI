import MyNav from "../Navbar/MyNav";

const MainLayout = (props) => {
	return (
		<div>
			<MyNav></MyNav>
			{props.children}
		</div>
	);
};

export default MainLayout;
