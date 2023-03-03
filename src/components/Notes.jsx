/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(()=>{
      getNotes();
    })
  return (
    <>
    <AddNote />
    <div className="flex my-3 flex-col text-center mx-8">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
      Your Notes
    </h1>
    {notes.map((note, index) => {
      return (
        <div className="h-full w-full flex items-center justify-center">
            <NotesItem key={index} note={note} />
        </div>
      )
    })}
  </div>
    </>
  )
}

export default Notes