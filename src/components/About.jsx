import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(NoteContext)
  return (
    <div>About our leader: {a.name}</div>
  )
}

export default About;