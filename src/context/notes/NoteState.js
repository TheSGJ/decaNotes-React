import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host = process.env.REACT_APP_API_URL
  const notesValue = []
  // Add Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYjI3ZjU0N2I5MWIyMzYxYWVkMjJmIn0sImlhdCI6MTY2NDg3MzU5MX0.jizlYGrL27fjBV8ZEqhsYHnVzRcvGcS9Cge8JtJTprY"
      }
    })
    const json = await response.json()
    console.log(json)
    setNotes(json)

  }
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYjI3ZjU0N2I5MWIyMzYxYWVkMjJmIn0sImlhdCI6MTY2NDg3MzU5MX0.jizlYGrL27fjBV8ZEqhsYHnVzRcvGcS9Cge8JtJTprY"
      },
      body: JSON.stringify({title, description, tag})
    })
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
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    console.log("Deleted Note: " + id)
  }

  // Update Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYjI3ZjU0N2I5MWIyMzYxYWVkMjJmIn0sImlhdCI6MTY2NDg3MzU5MX0.jizlYGrL27fjBV8ZEqhsYHnVzRcvGcS9Cge8JtJTprY"
      },
      body: JSON.stringify({title, description, tag})
    })
    
    const json = response.json()
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  const [notes, setNotes] = useState(notesValue)
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;