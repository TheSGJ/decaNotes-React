import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />

    </Routes>
    </Router>
    </>
  )
}

export default App;