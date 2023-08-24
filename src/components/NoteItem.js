import React, { useContext } from 'react';
import NoteContex from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContex);
    const { deleteNote } = context;
    const { note } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="operations">
                            <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;
