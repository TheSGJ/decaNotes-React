/* eslint-disable react/prop-types */

const Alert = (props) => {
  
  return (
    <div className={`p-4 mb-6 text-sm rounded-lg bg-gray-800 text-blue-400`} role="alert">
    <span className="font-medium">{props.popup.msg}</span>
  </div>
  )
}

export default Alert