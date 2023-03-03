import React, { useContext } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaEdit} from 'react-icons/fa'
import NoteContext from "../context/notes/noteContext";

const NotesItem = (props) => {
    const {note} = props;
    const context = useContext(NoteContext)
    const { deleteNote } = context;
  return (
<div className="p-4 md:w-1/3">
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <div className="p-6">
      <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{note.tag}</span>
      <h1 className="title-font text-xl font-bold text-gray-200 mb-3">{note.title}</h1>
      <p className="leading-relaxed text-gray-300 mb-3">{note.description}</p>
      <div className="flex items-center flex-swrap">
      <RiDeleteBin6Line onClick={()=>{deleteNote(note._id)}} className="w-6 h-6 mr-2 cursor-pointer dark:text-white" />
      <FaEdit className="w-6 h-6 dark:text-white cursor-pointer" />
       
      </div>
    </div>
  </div>
</div>
  )
}

export default NotesItem