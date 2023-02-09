import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
    const [note, setNote] = useState({title:"", description:"", tag:"default"})
    const context = useContext(NoteContext);
    const { addNote } = context;
    const handleClick = (e) =>{
      e.preventDefault()
      addNote(note.title, note.description, note.tag)
    }
    const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center mx-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Add a Note
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
                  onChange={onChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                  required
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
                  onChange={onChange}
                  id="description"
                  name="description"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 z-10 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  ADD NOTE
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default AddNote