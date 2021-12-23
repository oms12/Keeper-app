import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
const url1 = "http://localhost:3000/posts/add";
const url2 = "http://localhost:3000/posts/";

function App() {
  const [notes, setNotes] = useState([]);
  const [get, setget] = useState(false);
  const [createnote, setcreatenote] = useState({title : "", content : ""});
  useEffect(()=>
  {
    axios.get(url2)
  .then(res=> { 
      setNotes(res.data)
  })
  .catch(err => {console.log(err)});
  },[get])  
  
  function addNote(newNote) {
    const t = notes.filter((noteItem) => {
      return noteItem._id === newNote._id;
    })[0]
    if(t)
    {
      axios.post(url2 + "update/" + newNote._id, newNote)
       .then(res=> setget(!get));
    }
    else{
      axios.post(url1,newNote)
      .then(res=> setget(!get));
      
   }
  }

  function deleteNote(id) {
    axios.delete(url2 + id)
     .then(res => setget(!get))
    
  }
  
  function updateNote(id)
  {
    const t = notes.filter((noteItem) => {
      return noteItem._id === id;
    })[0]
      setcreatenote(
        t
    )
  } 




  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} createnote ={createnote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onUpdate = {updateNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
