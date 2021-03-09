import React, { useState, useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import noteContext from "../data";

export const EditNote = (props) => {
	const { notes, setNotes } = useContext(noteContext);

	const { title, content } = notes.find((item) => item.id === props.id);
	const [note, editNote] = useState({
		title: title,
		content: content,
	});
	function handleChange(event) {
		const { name, value } = event.target;

		editNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}
	function updateValue() {
		let itemId = notes.findIndex((item) => item.id === props.id);
		let updatedNotes = [...notes];
		let updatedNote = { ...notes[itemId] };
		updatedNote = { id: itemId + 1, title: note.title, content: note.content };
		updatedNotes[itemId] = updatedNote;
		setNotes(updatedNotes);
	}
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: "auto" }}
				className="overlay"
			></motion.div>
			<div className="editNoteContainer">
				<Link to="/" />
				<motion.div
					className="note edit"
					layoutId={`card-div-${props.id}`}
					exit={{ opacity: 1, transition: { duration: 0.15 } }}
				>
					<motion.div layoutId={`card-content-parent-${props.id}`}>
						<motion.div layoutId={`card-title-${props.id}`}>
							<input name="title" onChange={handleChange} value={note.title} />{" "}
						</motion.div>
						<motion.div layoutId={`card-content-${props.id}`}>
							<textarea
								name="content"
								onChange={handleChange}
								value={note.content}
								rows={"3"}
							/>
						</motion.div>
					</motion.div>
					<button>
						<Link to="/" onClick={updateValue} />
						<DoneIcon />
					</button>
				</motion.div>
			</div>
		</>
	);
};

// <form className="create-note">
// 				{clickBool && (
// 					<input
// 						name="title"
// 						onChange={handleChange}
// 						value={note.title}
// 						placeholder="Title"
// 					/>
// 				)}
// 				<textarea
// 					onClick={textAreaClick}
// 					name="content"
// 					onChange={handleChange}
// 					value={note.content}
// 					placeholder="Take a note..."
// 					rows={clickBool ? "3" : "1"}
// 				/>
// 				{isNoteEmpty ? null : (
// 					<p style={errorStyle}>
// 						Please input the empty field(s) before submitting
// 					</p>
// 				)}
// 				<Zoom in={clickBool}>
// 					<Fab onClick={submitNote}>
// 						<AddIcon />
// 					</Fab>
// 				</Zoom>
// 			</form>
