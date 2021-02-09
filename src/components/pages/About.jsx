import { Fade } from "@material-ui/core";
import React from "react";
import FadeIn from "react-fade-in";

const About = () => {
	return (
		<FadeIn>
			<div className="About">
				<h1>About</h1>
				<div>
					<p>
						Fola-Keep is a clone of the Google keep app and it has most of the
						features. <br />
						The sign in and database features, which allows user data persist
						beyond one browser session, of the app are not available at the
						moment.
					</p>
				</div>
			</div>
		</FadeIn>
	);
};

export default About;
