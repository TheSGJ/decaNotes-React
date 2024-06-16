import './App.css';
import './styles/Modal.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import NoteState from './context/notes/NoteState';
import ErrorBoundary from './ErrorBoundary'
// import Login from './components/Login';
import Alert from './components/Alert';
import NextTopLoader from 'nextjs-toploader';
import Login from './components/Login';
import { useState } from 'react';
const App = () => {
  const [popup, setPopup] = useState(null)
  const showAlert = (message, color) =>  {
    setPopup({
      msg: message,
      color: color
    })
    setTimeout(()=> {
      setPopup(null)
    }, 10000)
  }
  return (
    <div className='dark:bg-black'>
    <Router>
      <NextTopLoader color='red' showSpinner={false} />
      <ErrorBoundary>
    <NoteState>
      <Navbar showAlert={showAlert} />
      {popup&&<Alert popup={popup} />}
    <Routes>
    <Route path="/" element={<Home showAlert={showAlert} />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login showAlert={showAlert} />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound/>} />
    </Routes>
    </NoteState>
    </ErrorBoundary>
    </Router>
    </div>
  )
}

export default App;