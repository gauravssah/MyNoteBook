import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64e4c962ba20a46f4cbe9b6e",
            "user": "64e304362b7dccc2a8be1dfd2",
            "title": "My Title1",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715362471",
            "__v": 0
        },
        {
            "_id": "64e4c963ba20a46f4cbe9b70",
            "user": "64e304362b37dccca8be1dfd2",
            "title": "My Title2",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715363483",
            "__v": 0
        },
        {
            "_id": "64e4c964ba20a46f4cbe9b72",
            "user": "64e304362b7d6ccca8be1dfd2",
            "title": "My Title3",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715364567",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // Todo Api call
        console.log("Adding a new note")
        const note = {
            "_id": "64e4c963ba320a46f4cbe89b70",
            "user": "64e304362b7dc3cca8be15dfd2",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1692715363483",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
        // Todo Api call
        console.log("deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;