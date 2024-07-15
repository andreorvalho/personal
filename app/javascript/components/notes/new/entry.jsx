// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from "react-dom/client";
import Container from "./container"

const root = ReactDOM.createRoot(document.getElementById("new-note"));

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);