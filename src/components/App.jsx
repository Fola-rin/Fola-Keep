import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import FadeIn from "react-fade-in";
import About from "./pages/About";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}
	const noteDivStyle = {
		overflow: "auto",
		maxHeight: "7clear0vh",
	};
	const Home = () => (
		<div>
			<CreateArea onAdd={addNote} />
			<div style={noteDivStyle}>
				{notes.map((noteItem, index) => {
					return (
						<Note
							key={index}
							id={index}
							title={noteItem.title}
							content={noteItem.content}
							onDelete={deleteNote}
						/>
					);
				})}
			</div>
		</div>
	);
	return (
		<Router>
			<div>
				<Header />
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				>
					<div>
						<Route path="/Fola-Keep" component={Home} exact />
						<Route path="/about" component={About} />
					</div>
				</AnimatedSwitch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
