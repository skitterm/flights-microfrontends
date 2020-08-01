import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

ReactDOM.render(
  <Header links={[<a href="">Click here</a>]} />,
  document.getElementById("app-root")
);
