import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(()=>{
      getNotes();
      // eslint-disable-next-line
    }, [])
  return (
    <>
    <AddNote />
    <div className="flex my-3 flex-col text-center mx-8">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
      Your Notes
    </h1>
    {notes.map((note, index) => {
      return (
        <div className="flex flex-wrap">
            <NotesItem key={index} noteDetail={note} />
        </div>
      )
    })}
  </div>
    </>
  )
}

export default Notes