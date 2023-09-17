// var React = require("react");
// var ReactDOM = require("react-dom");

import react from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
const myElement = (
  <div>
    <h1>Welcome</h1>
    <p>👊 🔥</p>
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(myElement);

// ReactDOM.render(
//   <div>
//     <h1>Welcome</h1>
//     <p>👊</p>
//   </div>,
//   document.getElementById("root")
// );