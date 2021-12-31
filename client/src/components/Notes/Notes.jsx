import React, { useState, useEffect } from "react";
import Note from "../Notes/Note";
import CreateArea from "../Form/CreateArea";
import axios from "axios";
const url1 = "https://gautam-keeper-app.herokuapp.com/posts/add";
const url2 = "https://gautam-keeper-app.herokuapp.com/posts/";



function Notes() {
    const [notes, setNotes] = useState([]);
    const [get, setget] = useState(false);
    const [createnote, setcreatenote] = useState({title : "", content : ""});
    useEffect(()=>
    {
      const options = {
        url: url2,
        method: 'get',
        headers: {
          'authorization' : "Bearer " + localStorage.getItem("mytoken"),
        },
      };
      axios(options) 
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
          const option1 = {
          url: url2 + "update/" + newNote._id,
          method: 'post',
          headers: {
            'authorization' : "Bearer " + localStorage.getItem("mytoken"),
          },
          data : newNote
        };
        axios(option1) 
         .then(res=> setget(!get));
      }
      else{
        const option1 = {
          url: url1,
          method: 'post',
          headers: {
            'authorization' : "Bearer " + localStorage.getItem("mytoken"),
          },
          data : newNote
        };
        axios(option1) 
        .then(res=> setget(!get));
        
     }
    }
  
    function deleteNote(id) {
      const option1 = {
        url: url2 + id,
        method: 'delete',
        headers: {
          'authorization' : "Bearer " + localStorage.getItem("mytoken"),
        },
        data : id
      };
      axios(option1)
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
      </div>
    );
  }
  
  export default Notes;