import React, { useState, useEffect } from "react";
import NotesList from "../src/components/noteslist";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
