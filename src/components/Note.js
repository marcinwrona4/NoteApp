import { MdDeleteForever } from "react-icons/md";
import React from 'react';
import "../styles/styles.css";

const Note = function( {id, text} ) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note_footer">
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
}

export default Note;