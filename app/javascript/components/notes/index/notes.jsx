import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes = () => {
  const [Notes, setNotes] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios({ method: 'GET', url: '/notes.json'})
    .then(response => {
      setNotes(response?.data);
    })
    .catch(error => {
      setErrors([error]);
    })
  }, [])

  const truncate = (str, n) => {
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  };

  const arrayInGroupsOfN = (oldArray, n) => {
    return(
      oldArray.reduce((newArray, element, i) => (
        i % n ? newArray[newArray.length - 1].push(element) : newArray.push([element])
      ) && newArray, [])
    );
  }

  if (Notes.length === 0) {
    return null;
  }

  if (errors.length === 0) {
    return null;
  }

  const notesInGroupsOf3 = arrayInGroupsOfN(Notes, 3)

  return (
    <>
      {notesInGroupsOf3.map(group => (
        <div className="row">
          {group.map(note => (
            <div className="col">
              <div className="card">
                <div className="card-body" key={note.id}>
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{truncate(note.content, 20)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Notes
