import React from "react";
import "./footer.style.css";

const Footer = () => {
	const goToLink = (link) => {
		window.location.href = link;
	};

	return (
		<div className="footer">
			<div className="m-1">© hihi_haha_hoho</div>
			<div>
				<div
					className="fa fa-facebook"
					onClick={() => {
						goToLink("https://www.facebook.com/dqdzung");
					}}
				></div>
				<div
					className="fa fa-github"
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
