import React from 'react';
import NotesList from "./components/NotesList";
import Header from './components/Header';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = function() {
  const app_name = "NoteApp"; 
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Sample note',
    },
    {
      id: nanoid(),
      text: 'Sample note',
    },
  ]);

  const create_note = function(text) {
    const newNote = {
      id: nanoid(),
      text: text
    }
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  }

  return(
  <div className="container">
    <Header app_name={app_name}/>
    <NotesList notes={notes} create_note_handler={create_note}/>
  </div>
  );
}

export default App;
