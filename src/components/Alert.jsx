import React from 'react'

const Alert = (props) => {
  return (
    <div className="p-4 mb-6 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert">
    <span class="font-medium">{props.message}</span>
  </div>
  )
}

export default Alert