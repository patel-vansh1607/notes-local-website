import React from "react";

function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <button className="delete-btn" onClick={() => deleteNote(id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
