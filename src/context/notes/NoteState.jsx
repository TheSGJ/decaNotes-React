/* eslint-disable react/prop-types */
import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host = import.meta.env.VITE_APP_API_URL
  const notesValue = []
  // Add Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    })
    const json = await response.json()
    setNotes(json)

  }
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag})
    })
    console.log('Adding a new note')
    const json = response.json()
    console.log(json)
    const note = {
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0
    }
    setNotes(notes.concat(note))
  }

  // Delete Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    })
    const json = response.json()
    console.log(json)
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
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = response.json()
    console.log(json)
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