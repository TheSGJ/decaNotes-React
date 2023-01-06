import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import NoteState from './context/notes/NoteState';
import ErrorBoundary from './ErrorBoundary'
const App = () => {
  return (
    <>
    <Router>
      <ErrorBoundary>
    <NoteState>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound/>} />
    </Routes>
    </NoteState>
    </ErrorBoundary>
    </Router>
    </>
  )
}

export default App;