import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
function Note(props) {
  function handleClickdelete() {
    props.onDelete(props.id);
  }
function handleClickupdate(){
    props.onUpdate(props.id);
  } 




  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClickdelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleClickupdate}>
        <UpdateOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
