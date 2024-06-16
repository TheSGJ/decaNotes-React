/* eslint-disable no-unused-vars */
import React from "react";
import Notes from "./Notes";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="text-gray-700 body-font relative">
      {localStorage.getItem("token") ? <Notes /> :<div>
      <div className='text-white text-center m-3'>You need to login to add and view notes.</div>
      <Link to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
      </Link>  
      </div>}
    </section>
  );
};

export default Home;
