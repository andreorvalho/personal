import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function newConverter() {
  const [textEntry, setTextEntry] = React.useState("");

  return (
    <div className="form-outline">
      <label className="form-label" htmlFor="textAreaExample">Message</label>
      <textarea className="form-control" id="textAreaExample1" rows="4"></textarea>
    </div>
  );
}
