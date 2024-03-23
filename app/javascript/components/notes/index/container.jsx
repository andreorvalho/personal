import React from 'react';
import ReactDOM from "react-dom/client";

import Notes from "./notes";
import MarkdownExample from "./markdown_example";

const root = ReactDOM.createRoot(document.getElementById("notes"));
root.render(
  <React.StrictMode>
    <Notes />
    <MarkdownExample />
  </React.StrictMode>
);
