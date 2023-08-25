import React, { useContext } from 'react';
import NoteContex from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContex);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ backgroundColor: "#edffff", color: "black" }}>
                <div className="card-body">

                    <div className="d-flex justify-content-between ">
                        <h5 className="card-title">{note.title}</h5>
                        <div className="operations" style={{ minWidth: "20%" }}>
                            <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}></i>
                            <i className="far fa-edit" onClick={() => { updateNote(note) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;
