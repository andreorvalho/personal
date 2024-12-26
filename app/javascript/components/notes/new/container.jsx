import React, { useState } from 'react';
import NewEditor from "./new_editor";
import NewConverter from "./new_converter";
import axios from 'axios';

const Container = () => {
  const [newNote, setNewNote] = useState(true);
  const [textEntry, setTextEntry] = useState("");

  const handleSubmit = (e) => {
    axios({
      method: 'POST',
      url: '/notes.json',
      data: { note: { content: textEntry, title: 'new note' } },
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      }
    })
    .then(response => {
      if (response?.data?.id) {
        window.location.href = `/notes/${response?.data?.id}`
      }
    })
    .catch(error => {
      console.log(error);
    })
    e.preventDefault();
  }

  return (
    <>
      <div className="d-flex">
        <p>
          New node editor
        </p>
        <div className="form-check form-switch switch-margin">
          <input
            className="form-check-input float-end"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() => setNewNote(newNote => !newNote)}
          />
        </div>
        <p>
          Convert text note into markdown
        </p>
      </div>
      {
        newNote ?
          <NewEditor value={textEntry} onChange={setTextEntry} handleSubmit={handleSubmit} /> :
          <NewConverter value={textEntry} onChange={setTextEntry} handleSubmit={handleSubmit} />
      }
    </>
  );
}

export default Container;
