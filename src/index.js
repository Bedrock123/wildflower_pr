import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <App path={window.location.pathname} />,
  document.getElementById("root")
);
