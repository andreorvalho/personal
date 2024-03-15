import React from 'react';
import ReactDOM from "react-dom/client";

import MarkdownExample from "./markdown_example";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MarkdownExample />
  </React.StrictMode>
);
