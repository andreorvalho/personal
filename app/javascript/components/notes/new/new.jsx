import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function New() {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <MDEditor value={value} onChange={setValue} data-color-mode="light" />
    </div>
  );
}
