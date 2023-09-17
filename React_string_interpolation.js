var React = require("react");
var ReactDOM = require("react-dom");

const fname = "Iron";
const lname = "man";
const fullname = fname + " " + lname;
// ReactDOM.render(
//     <div>
//         <h1>Hello {fname} {lname} </h1>
//     </div>,
//     document.getElementById("root")
// )
// ReactDOM.render(
//     <div>
//         <h1>Hello {fullname} 👊</h1>
//     </div>,
//     document.getElementById("root")
// )

// this is template literals
ReactDOM.render(
    <div>
        <h1>Hello {`${fname} ${lname}`} </h1>
    </div>,
    document.getElementById("root")
)