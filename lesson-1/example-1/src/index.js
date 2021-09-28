import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/*
{
  "elem": "div",
  children: {
    elem: "p",
    textContent: "Some text"
  }
}
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
