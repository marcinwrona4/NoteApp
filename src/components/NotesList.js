import React from 'react';
import Note from './Note';
import CreateNote from './CreateNote';

const NotesList = function( {notes, create_note_handler} ) {
return (
    <div className="notes_list"> 
    {notes.map((note)=> (
    <Note id={note.id} text={note.text}/>
    ))}
    <CreateNote create_note_handler={create_note_handler}/>
</div>

);
}

export default NotesList;