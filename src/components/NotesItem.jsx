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
      <a href={`#edit-note-${note._id}`}>
      <FaEdit className="w-6 h-6 dark:text-white cursor-pointer" />
      </a>
       
      </div>
    </div>
  </div>
  <div id={`edit-note-${note._id}`} class="modalDialog">
    <div><a href="#close" title="Close" class="close">X</a>
    <i class='text-center'><b>Date: </b>??</i>
    <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center mx-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Edit the Note
          </h1>
        </div>
        <form className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={note.title}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="tag"
                  className="leading-7 text-sm text-gray-600 dark:text-white"
                >
                  Tag (Optional)
                </label>
                <input
                  value={note.tag}
                  type="text"
                  id="tag"
                  name="tag"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-gray-600 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  value={note.description}
                  id="description"
                  name="description"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 z-10 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  EDIT NOTE
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>
</div>
  )
}

export default NotesItem