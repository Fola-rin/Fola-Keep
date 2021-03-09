import React, { useState, useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import noteContext from "../data";
import { Link } from "react-router-dom";

function CreateArea() {
	const { notes, setNotes } = useContext(noteContext);

	const [createNote, setCreateNote] = useState({
		title: "",
		content: "",
	});

	function addNote(newNote) {
		setNotes((prevNotes) => {
			console.log(prevNotes);
			return [...prevNotes, newNote];
		});
	}

	const [clickBool, setClickBool] = useState(false);
	const [isNoteEmpty, noteEmptyState] = useState(true);

	function handleChange(event) {
		const { name, value } = event.target;

		setCreateNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}
	const textAreaClick = () => {
		setClickBool(true);
	};

	function submitNote(event) {
		if (createNote.title === "" || createNote.content === "") {
			noteEmptyState(false);
		} else {
			const note = { id: notes.length + 1, ...createNote };
			noteEmptyState(true);
			addNote(note);
			console.log(note);
			setCreateNote({
				title: "",
				content: "",
			});
		}

		event.preventDefault();
	}
	const errorStyle = {
		color: "red",
	};
	return (
		<div>
			<form className="create-note">
				{clickBool && (
					<input
						name="title"
						onChange={handleChange}
						value={createNote.title}
						placeholder="Title"
					/>
				)}
				<textarea
					onClick={textAreaClick}
					name="content"
					onChange={handleChange}
					value={createNote.content}
					placeholder="Take a note..."
					rows={clickBool ? "3" : "1"}
				/>
				{isNoteEmpty ? null : (
					<p style={errorStyle}>
						Please input the empty field(s) before submitting
					</p>
				)}
				<Zoom in={clickBool}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
