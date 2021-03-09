import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>
				Made by Oyeleke Afolarin <br />{" "}
			</p>
			<p>Copyright ⓒ {year}</p>
		</footer>
	);
};

export default Footer;
