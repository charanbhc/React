import react from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"

const customHeading = {
  color : "#32c888",
  fontSize: "80px",
};

const myElement = (
  <div>
  <h1 style ={customHeading}>Hello</h1>
  </div>
);

const root=createRoot(document.getElementById("root"));
root.render(myElement);