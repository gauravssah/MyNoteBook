import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContex from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(NoteContex);
    let navigate = useNavigate();
    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNotes] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNotes({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

    }

    const handalclick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated Successfully", "success")
    };

    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className='my-3'>

                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title:</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description:</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag:</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>

                            </form>

                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handalclick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container my-2">
                    {notes.length === 0 && 'No Notes To Display...'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes;
