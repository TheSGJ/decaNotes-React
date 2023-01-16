import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaEdit} from 'react-icons/fa'
const NotesItem = (props) => {
    const {note} = props;
  return (
    <div
    className="block my-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700"
  >
    <div className='hover:bg-gray-100 dark:hover:bg-gray-700 border-dashed'>

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {note.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    {note.description}
    </p>
    </div>
    <span className='my-3' style={{display: 'flex', flexDirection: 'row'}}>
    <RiDeleteBin6Line className="w-6 h-6 mr-2 cursor-pointer dark:text-white" />
    <FaEdit className="w-6 h-6 dark:text-white cursor-pointer" />
    </span>
  </div>
  )
}

export default NotesItem