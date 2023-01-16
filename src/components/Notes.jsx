/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
  return (
    <div className="flex my-3 flex-col text-center mx-8">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
      Your Notes
    </h1>
    {notes.map((note) => {
      return (
        <div className="h-full w-full flex items-center justify-center">
            <NotesItem note={note} />
        </div>
      )
    })}
  </div>
  )
}

export default Notes