import React, { useContext } from 'react';
import NoteContex from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(NoteContex);
    const { notes } = context;
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes;
