import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function newEditor({ value = '', onChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-success">Success</button>
        <MDEditor value={value} onChange={onChange} />
      </form>
    </div>
  );
}
