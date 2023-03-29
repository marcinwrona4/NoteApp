import React from 'react';
import { useState } from 'react';

const AddNote = function( { create_note_handler } ) {
    const char_limit = 280;
    const [noteText, setNoteText] = useState('');

    const change_handler = function(event) {
        const change = char_limit - (event.target.value).length >= 0 ? setNoteText(event.target.value) : null;
    }

    const save_handler = function() {
        if (noteText.trim().length > 0) {
        create_note_handler(noteText);
        setNoteText('');
    }
    }

    return (
        <div className="create_note">
            <textarea 
            rows="8"
            cols="8"
            placeholder="Type a note text"
            value={noteText}
            onChange={change_handler}
            ></textarea>
            <div className="note_footer">
                <p>{noteText.length}/280 chars</p>
                <button className="save_button" onClick={save_handler}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;