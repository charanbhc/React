
var React = require("react");
var ReactDOM = require("react-dom");

// ReactDOM.render(
//   <div>
//     <h1>Heading 1</h1>
//     <p>Paragraph 1</p>
//   </div>,
//   document.getElementById("root")
// );

// var myElement = (
//   <div>
//     <h1>Heading 1</h1>
//     <p>Paragraph 1</p>
//   </div>
// );

// var myElement = (
//   <div>
//     <h1>Heading 1</h1>
//     <p>5 + 2 = {5 + 2}</p>
//   </div>
// );

// const myElement = (
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//   );

// let text = "Hello World!!!";
// const myElement = (<h1>{text}</h1>);

// const x = -1;
// let text = "dummy";

// if (x < 0) {
//   text = "Good Morning";
// } else {
//   text = "Good Night";
// }
// const myElement = (<h1>{text}</h1>);
const myElement = <h1 className="myclass">Hello World</h1>;

const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(myElement);


//style
// body {
//     font-family: "Montserrat";
//   }
//   .myclass {
//     font-size: 50px;
//     color: red;
//   }


// indexe
// <body>
// <div id="root"></div>
// <script src="../src/index.js" type="text/javascript"></script>
// </body>
// </html>