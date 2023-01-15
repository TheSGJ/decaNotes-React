import React, {useState} from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
const notesValue = [
    {
      "_id": "633c1bfc4916707dc03a67f8",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-04T11:41:48.452Z",
      "__v": 0
    },
    {
      "_id": "633c1c0a4916707dc03a67fa",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-04T11:42:02.625Z",
      "__v": 0
    },
    {
      "_id": "633c1da64916707dc03a67fc",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-04T11:48:54.177Z",
      "__v": 0
    },
    {
      "_id": "633c1e114916707dc03a67fe",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-04T11:50:41.655Z",
      "__v": 0
    },
    {
      "_id": "6356ab709d8472c1366dba92",
      "user": "633b27f547b91b2361aed22f",
      "title": "Hello Shadow",
      "description": "I saw a big shadow, back there.",
      "tag": "personal",
      "date": "2022-10-24T15:12:48.051Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesValue)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;