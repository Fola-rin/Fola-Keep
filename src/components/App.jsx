import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import FadeIn from "react-fade-in";
import About from "./pages/About";
import Header from "./Header";
import Footer from "./Footer";
import { Notes } from "./Notes";
import CreateArea from "./CreateArea";
import "../styles.css";
import { motion } from "framer-motion";
import styledComponents from "styled-components";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { EditNote } from "./EditNote";

import noteContext from "../data";

const items = [
	{
		id: 1,
		title: "How to use FolaKeep",
		content:
			"1. Tap the bin icon to delete \n2. Tap the pen icon to edit \n3. Once youre done editing click the ✓ icon to save your changes",
	},
];

function App() {
	const localData = localStorage.getItem("notes");
	const [notes, setNotes] = useState(localData ? JSON.parse(localData) : items);
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const Edit = ({ match }) => {
		// console.log(match);
		//
	};
	const Home = ({ match }) => {
		let address = match.params.id;
		console.log(match);
		let result = null;
		if (address) {
			result = notes.find((item) => item.id == address);
		}

		return (
			<div>
				<Notes />
				{/* <AnimatePresence animate={{ duration: 3 }}> */}
				{result && <EditNote id={result.id} />}
				{/* </AnimatePresence> */}
			</div>
		);
	};

	return (
		<noteContext.Provider value={{ notes, setNotes }}>
			<AnimateSharedLayout>
				<Router>
					<Header />
					<div className="content">
						<CreateArea />
						<Route path={["/:id", "/"]} component={Home} />
						{/* <Route path="/:id" component={Edit} /> */}
					</div>
					<Footer />
				</Router>
			</AnimateSharedLayout>
		</noteContext.Provider>
	);
}

export default App;
