import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    a.update()
  })
  
  return (
    <div>About our leader: {a.state.name}</div>
  )
}

export default About;