import React, { useState } from 'react';
import NewEditor from "./new_editor";
import NewConverter from "./new_converter";

const Container = () => {
  var [newNote, setNewNote] = useState(true);

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
      {newNote ? <NewEditor /> : <NewConverter />}
    </>
  )
}

export default Container;
