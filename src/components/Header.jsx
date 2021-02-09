import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<Link to="/">
				<h2>Fola-Keep</h2>
			</Link>
			<ul className="navlinks">
				<Link to="/about">
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Header;
