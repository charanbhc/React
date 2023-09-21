// index .js

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import * as obj from "./math.js";
//     import PIE,{PrecisionFive,PrecisionTwo} from "./math.js";
// NO obj.pi,ob.PrecisionTwo required when used above type
console.log(obj);

const myElement = (
  <div>
    <h1>Value of Pi</h1> 
    <ol>
      <li>
        <strong>Precision 10</strong> - {obj.pi}
      </li>
      <li>
        <strong>Precision 3</strong> - {obj.PrecisionTwo()}
      </li>
      <li>
        <strong>Precision 5</strong> - {obj.PrecisionFive()}
      </li>
    </ol>
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(myElement);


// Math.js
// const pi = 3.141592653;

// function PrecisionTwo() {
//   return pi.toPrecision(3);
// }

// function PrecisionFive() {
//   return pi.toPrecision(5);
// }

// export default pi;

// export { PrecisionTwo, PrecisionFive };

