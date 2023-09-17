var React = require("react");
var ReactDOM = require("react-dom");

var today = new Date();
var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();  // for month + 1 bcoz Jan is start from 0 to 11 
var time = today.getHours() + ":" + today.getMinutes() + "-" + today.getSeconds();
var dateTime = date + " " + time;
console.log(dateTime);

var day =today.getDay();
console.log(day);
let text = "";
// sunday 0 monday 1...
if (day === 0 || day === 0)
{
    text = "weekend";
}
else
{
    text = "weekday";
}
ReactDOM.render(
  <div>
    <p>👊 {text}</p>
  </div>,
  document.getElementById("root")
);