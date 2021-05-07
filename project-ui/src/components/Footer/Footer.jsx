import React from "react";
import "./footer.style.css";

const Footer = () => {
	const goToLink = (link) => {
		window.location.replace(link);
	};

	return (
		<div className="footer">
			<div className="m-1">© hihi_haha_hoho</div>
			<div>
				<div
					className="fa fa-facebook grow"
					onClick={() => {
						goToLink("https://www.facebook.com/dqdzung");
					}}
				></div>
				<div
					className="fa fa-github grow"
					onClick={() => {
						goToLink(
							"https://github.com/hihi-haha-hoho/CF46-Project-UI/tree/master/project-ui"
						);
					}}
				></div>
			</div>
		</div>
	);
};

export default Footer;
