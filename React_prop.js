import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="dummyalt" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
const myElement = (
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Jam"
      img="https://randomuser.me/api/portraits/women/95.jpg"
      tel="+123 1231 120"
      email="jam@example.com"
    />
        
    <Card
      name="Jack"
      img="https://randomuser.me/api/portraits/men/13.jpg"
      tel="+0172-7452479"
      email="jack@example.com"
    />
        
    <Card
      name="Jimmy"
      img="https://randomuser.me/api/portraits/women/18.jpg"
      tel="+790 615 7091"
      email="jimmy@example.com"
    />
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(myElement);
