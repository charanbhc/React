// var React = require("react");
// var ReactDOM = require("react-dom");

import react from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"

var url = "https://picsum.photos/200/300?random=1"
const myElement = (
  <div>
    <img className="pics" alt="check" src={url + "?random1"}/>
    <img className="pics" alt="check" src={url + "?random2"}/>
    <img className="pics" alt="check" src={url + "?random3"}/>
  </div>
);

const root=createRoot(document.getElementById("root"));
root.render(myElement);


// style

// body {
//     font-family: "Montserrat";
//   }
//   .pics {
//     display: block;
//     padding: 10px 0;
//   }
  