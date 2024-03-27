import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function newEditor() {
  const [textEntry, setTextEntry] = React.useState("");

  return (
    <div>
      <MDEditor value={textEntry} onChange={setTextEntry} />
    </div>
  );
}
