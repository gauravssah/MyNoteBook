import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64e4c962ba20a46f4cbe9b6e",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715362471",
            "__v": 0
        },
        {
            "_id": "64e4c963ba20a46f4cbe9b70",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715363483",
            "__v": 0
        },
        {
            "_id": "64e4c964ba20a46f4cbe9b72",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "1692715364567",
            "__v": 0
        },
        {
            "_id": "64e4c970ba20a46f4cbe9b74",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "My Title2",
            "description": "Please wake up early2",
            "tag": "personal",
            "date": "1692715376119",
            "__v": 0
        },
        {
            "_id": "64e4c976ba20a46f4cbe9b76",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "My Title2",
            "description": "Please wake up early2",
            "tag": "personal3",
            "date": "1692715382934",
            "__v": 0
        },
        {
            "_id": "64e4c9b0ba20a46f4cbe9b78",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "Gauarv Title",
            "description": "Please wake up early gauarv",
            "tag": "gaurav",
            "date": "1692715440958",
            "__v": 0
        },
        {
            "_id": "64e4c9bfba20a46f4cbe9b7a",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "Gauarv Title",
            "description": "Please wake up early gauarv",
            "tag": "gaurav",
            "date": "1692715455887",
            "__v": 0
        },
        {
            "_id": "64e4ca16ba20a46f4cbe9b7c",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "Gauarv Title2",
            "description": "Please wake up early gauarv",
            "tag": "gaurav",
            "date": "1692715542743",
            "__v": 0
        },
        {
            "_id": "64e592a4a1278bb3047a2073",
            "user": "64e304362b7dccca8be1dfd2",
            "title": "New note",
            "description": "Please access the note",
            "tag": "youtube",
            "date": "1692766884711",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // Todo Api call
        console.log("Adding a new note")
        const note = {
            "_id": "64e4c963ba20a46f4cbe89b70",
            "user": "64e304362b7dccca8be15dfd2",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1692715363483",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = () => {

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