import React from 'react';
import ReactDOM from "react-dom/client";

import New from "./new";

const root = ReactDOM.createRoot(document.getElementById("new-note"));
root.render(
  <React.StrictMode>
    <New />
  </React.StrictMode>
);

