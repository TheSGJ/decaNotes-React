import PropType from "prop-types";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  
  const [eyeIcon, setEyeIcon] = useState("w-6 h-6 dark:text-white");
  const [eyeSlashIcon, setEyeSlashIcon] = useState(
    "hidden w-6 h-6 dark:text-white"
  );
  const [passType, setPassType] = useState("password");
  const host = import.meta.env.VITE_APP_API_URL;
  const togglePassEye = () => {
    if (eyeIcon === "w-6 h-6 dark:text-white") {
      setEyeIcon("hidden w-6 h-6 dark:text-white");
      setEyeSlashIcon("w-6 h-6 dark:text-white");
      setPassType("text");
    } else {
      setEyeIcon("w-6 h-6 dark:text-white");
      setEyeSlashIcon("hidden w-6 h-6 dark:text-white");
      setPassType("password");
    }
  };

  const handleLogin = async (email, password) => {
    console.log(email);
    console.log(password)
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("Trying to login");
    const json = await response.json();
    if(response.ok){
      localStorage.setItem("token", json.authToken);
      navigate("/")
      props.showAlert("Logged In successfuly!", "blue")
    } else{
      props.showAlert("Invalid Password or Email.", "red")
    }
  };
  const doLogin = (e) => {
    e.preventDefault();
    handleLogin(user.email, user.password);
  }
  const [user, setUser] = useState({email: "",password:""})
  const onChange = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }
  return (
    <div className="container">
      <div>
        <form style={{ width: "400px" }}>
          <div className="flex items-center justify-center from-teal-100 via-teal-300 to-teal-500">
            <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl dark:bg-[#121212]">
              <div className="max-w-md mx-auto  space-y-6">
                <div className="space-y-2 text-gray-700">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    EMAIL
                  </label>
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 flex items-center px-4 pointer-events-none"
                    >
                      <MdAlternateEmail className="w-6 h-6 dark:text-white" />
                    </div>
                    <input
                      className="pl-11 pr-2 py-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white block w-full"
                      id="email"
                      name="email"
                      required="required"
                      autoComplete="email"
                      placeholder="EMAIL"
                      type="text"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-gray-700">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600 dark:text-white"
                  >
                    PASSWORD
                  </label>
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute inset-y-0 flex items-center px-4 pointer-events-none"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      className="pl-11 pr-11 py-2 bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out dark:bg-gray-700 dark:text-white dark:border-white block w-full"
                      id="password"
                      name="password"
                      required="required"
                      autoComplete="password"
                      placeholder="********"
                      type={passType}
                      onChange={onChange}
                    />
                    <div className="absolute right-0 z-30 inset-y-1 flex items-center px-4 ">
                      <button
                        onClick={togglePassEye}
                        type="button"
                        className="z-30 "
                      >
                        <svg
                          aria-hidden="true"
                          className={eyeIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>{" "}
                        <svg
                          aria-hidden="true"
                          className={eyeSlashIcon}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <button onClick={doLogin} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    SIGN IN
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
Login.propTypes = {
  showAlert: PropType.func
}
export default Login;