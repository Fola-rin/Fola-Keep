import React, { useState, useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import noteContext from "../data";

const noteDivStyle = {
	overflow: "auto",
	maxHeight: "70vh",
};

const Note = (props) => {
	function handleClick(e) {
		props.onDelete(props.id);
	}
	return (
		<motion.div
			className="note"
			layoutId={`card-div-${props.id}`}
			initial={{ opacity: 1, transition: { duration: 0.15 } }}
		>
			<motion.div layoutId={`card-content-parent-${props.id}`}>
				<motion.div layoutId={`card-title-${props.id}`}>
					<h1>{props.title}</h1>
				</motion.div>
				<motion.div layoutId={`card-content-${props.id}`}>
					<p>{props.content}</p>
				</motion.div>
			</motion.div>
			<div className="noteIconDiv">
				<button onClick={handleClick} id={props.id}>
					<DeleteIcon />
				</button>
				<button>
					<EditIcon />
					<Link
						onClick={props.onClickNote}
						to={props.id.toString()}
						className={`card-open-link`}
					/>
				</button>
			</div>
		</motion.div>
	);
};

export const Notes = () => {
	const { notes, setNotes } = useContext(noteContext);

	function deleteNote(index) {
		setNotes((prevNotes) => {
			return prevNotes.reduce((arr, cur, curId) => {
				if (index !== curId + 1) {
					console.log([curId, cur]);
					cur.id = curId > index - 1 ? curId : curId + 1;
					arr.push(cur);
				}

				return arr;
			}, []);
			// return prevNotes.filter((noteItem, index) => {
			// 	return index + 1 !== id;
			// });
		});
		// const newNotes = [...notes];
		// newNotes.map((newNote, newId) => {
		// 	newNote.id = newId + 1;
		// });

		// setNotes(newNotes);
	}
	return (
		<div style={noteDivStyle} key={`keyx`}>
			{notes.map((noteItem, id) => {
				return (
					<Note
						key={id}
						id={id + 1}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				);
			})}
		</div>
	);
};
