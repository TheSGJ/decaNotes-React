import { Link, useNavigate } from "react-router-dom";
import PropType from "prop-types";
const Navbar = (props) => {
  const navigate = useNavigate();
    return (
      <>
      <header className="fixed-tp-nav">
        <nav className="bg-gray-900 border-gray-300 px-2 sm:px-4 py-2.5 dark:bg-[#121212]">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <span className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link className="flex items-center" to="/">
            <img src="vite.svg" className="mr-3 h-7 sm:h-9" alt="Deca Notes" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Deca Notes</span>
            </Link>
            </span>
          </span>
          <div className="flex md:order-2">
            
            {localStorage.getItem("token")?<button onClick={()=> {
              localStorage.clear("token")
              navigate("/login")
              props.showAlert("Logged Out successfuly!", "blue")
            }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>:<Link to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>}
      
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
 
              <li>
                <Link to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
  
            </ul>
          </div>
        </div>
      </nav>
      </header>
      <br /> <br />
      </>
    )
  }
  Navbar.propTypes = {
    showAlert: PropType.func
  }
  export default Navbar;