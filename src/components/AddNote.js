import React, { useContext, useState } from 'react';
import NoteContex from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContex);
    const { addNote } = context;

    const [note, setNotes] = useState({ title: "", description: "", tag: "" });

    const handalclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success")
    };

    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div className="container my-3">
            <h1>Add a Note</h1>
            <form className='my-3' onSubmit={handalclick}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />

                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag:</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} required />
                </div>

                <button type="submit" className="btn btn-info">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote;
