import React, { useContext } from 'react';
import NoteContex from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(NoteContex);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>
    )
}

export default Notes
