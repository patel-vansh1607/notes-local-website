import React, { useState } from "react";

function AddNote({ addNote }) {
  const [noteText, setNoteText] = useState("");

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="4"
        placeholder="Type your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default AddNote;
