import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "details/Header";

const App = () => (
  <div className="container">
    <Header />
    <div>hello from home</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
