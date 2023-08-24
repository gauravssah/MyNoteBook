import React, { useContext, useState } from 'react';
import NoteContex from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContex);
    const { addNote } = context;

    const [note, setNotes] = useState({ title: "", description: "", tag: "default" });

    const handalclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    };

    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <div className="mb-3 form-check" >
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ cursor: "pointer" }} />
                    <label className="form-check-label" htmlFor="exampleCheck1" style={{ cursor: "pointer" }}>Check me out</label>
                </div>
                <button type="submit" className="btn btn-info" onClick={handalclick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
