import React, {useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
const notesValue = [
    {
      "_id": "633c1bfc4916707dc03a67f8",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow from Summertime rendering",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-04T11:41:48.452Z",
      "__v": 0
    }
  ]
  // Add Note
  const addNote = (title, description, tag) =>{
    console.log('Adding a new note')
    const note = {
      "_id": "633c1bfc4916707dc03a67f8",
      "user": "633b27f547b91b2361aed22f7",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-04T11:41:48.452Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  // Delete Note
  const deleteNote = () =>{

  }

  // Update Note
  const editNote = () =>{

  }

  const [notes, setNotes] = useState(notesValue)
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;