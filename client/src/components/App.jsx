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
   useEffect(  ()=>
  { 
    async function getdata()
    {
      try {
        const res = await axios.get(url2);
        setNotes(res.data);
      } catch (error) {
        console.log(error);
      }
    } 
    getdata();
  },[get])
async function addNote(newNote) {
    try {
      const t = notes.filter((noteItem) => {
        return noteItem._id === newNote._id;
      })[0]
      if(t)
      {
        var res1 = await axios.post(url2 + "update/" + newNote._id, newNote);
        console.log(res1.data);
        setget(!get);
      }
      else{
        var res2 = await axios.post(url1,newNote);
        console.log(res2.data);
        setget(!get);
        
     }
    } catch (error) {
      console.log(error);
    }
  }

async function deleteNote(id) {
     try {
       const res = await axios.delete(url2 + id);
       console.log(res.data);
       setget(!get);
     } catch (error) {
       console.log(error);
     }
    
  }
  
  function updateNote(id)
  {
    try {
      const t = notes.filter((noteItem) => {
        return noteItem._id === id;
      })[0]
        setcreatenote(
          t
      )
    } catch (error) {
      console.log(error);
    }
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
