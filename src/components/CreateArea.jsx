import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import FadeIn from "react-fade-in";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const [clickBool, setClickBool] = useState(false);
	const [isNoteEmpty, noteEmptyState] = useState(true);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
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
		if (note.title === "" || note.content === "") {
			noteEmptyState(false);
		} else {
			noteEmptyState(true);
			props.onAdd(note);
			setNote({
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
						value={note.title}
						placeholder="Title"
					/>
				)}
				<textarea
					onClick={textAreaClick}
					name="content"
					onChange={handleChange}
					value={note.content}
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
