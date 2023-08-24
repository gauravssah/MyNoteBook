import { useState } from "react";
import NoteContext from "./NoteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get ALL Note
    const getNotes = async () => {

        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzA0MzYyYjdkY2NjYThiZTFkZmQyIn0sImlhdCI6MTY5MjYxOTIxNH0.qqIavW-BClDwJpCYOxGVFmzHpvvompgIzuenelVywis'
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }


    // Add a Note
    const addNote = async (title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzA0MzYyYjdkY2NjYThiZTFkZmQyIn0sImlhdCI6MTY5MjYxOTIxNH0.qqIavW-BClDwJpCYOxGVFmzHpvvompgIzuenelVywis'
            },
            body: JSON.stringify({ title, description, tag })
        });


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
    const deleteNote = async (id) => {
        // Api call

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzA0MzYyYjdkY2NjYThiZTFkZmQyIn0sImlhdCI6MTY5MjYxOTIxNH0.qqIavW-BClDwJpCYOxGVFmzHpvvompgIzuenelVywis'
            },

        });
        const json = response.json();
        console.log(json)

        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMzA0MzYyYjdkY2NjYThiZTFkZmQyIn0sImlhdCI6MTY5MjYxOTIxNH0.qqIavW-BClDwJpCYOxGVFmzHpvvompgIzuenelVywis'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;