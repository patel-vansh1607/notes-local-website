import React from "react";
import Note from "./notes";
import AddNote from "./addnote";

function NotesList({ notes, addNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} deleteNote={deleteNote} />
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
}

export default NotesList;
