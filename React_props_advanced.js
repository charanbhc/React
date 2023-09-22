index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const myElement = <App />;
const root = createRoot(document.getElementById("root"));
root.render(myElement);


contacts.js
const contacts = [
    {
      id: 1,
      name: "Kelya Dumas",
      imgURL: "https://randomuser.me/api/portraits/women/95.jpg",
      phone: "+123 1231 120",
      email: "kelya.dumas@example.com",
      company: "Google"
    },
    {
      id: 2,
      name: "Agostinho Mendes",
      imgURL: "https://randomuser.me/api/portraits/men/13.jpg",
      phone: "+790 615 7091",
      email: "marvin.carpenter@example.com",
      company: "E & Y"
    },
    {
      id: 3,
      name: "Elfriede Born",
      imgURL: "https://randomuser.me/api/portraits/women/18.jpg",
      phone: "+0172-7452479",
      email: "elfriede.born@example.com",
      company: "PwC"
    },
    {
      id: 4,
      name: "Rebecca Jenny",
      imgURL: "https://randomuser.me/api/portraits/women/79.jpg",
      phone: "+790 615 7091",
      email: "marvin.carpenter@example.com",
      company: "E & Y"
    },
    {
      id: 5,
      name: "Joe Nice",
      imgURL: "https://randomuser.me/api/portraits/men/15.jpg",
      phone: "+790 615 7091",
      email: "marvin.carpenter@example.com",
      company: "E & Y"
    },
    {
      id: 6,
      name: "Fuq Shoomer",
      imgURL: "https://randomuser.me/api/portraits/women/19.jpg",
      phone: "+790 615 7091",
      email: "marvin.carpenter@example.com",
      company: "E & Y"
    }
  ];
  
  export default contacts;

  
  components/card.jsx
  import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="rounded" src={props.img} alt="dummyalt" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>
        <p className="info">
          <strong>Contact : </strong> {props.phone}
        </p>
        <p className="info">
          <strong>Email : </strong> {props.email}
        </p>
        <p className="info">
          <strong>Company : </strong> {props.company}
        </p>
      </div>
    </div>
  );
}
export default Card;


components/app.jsx
import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div className="cardcontainer">
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
        company={contacts[0].company}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
        company={contacts[1].company}
      />{" "}
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
        company={contacts[2].company}
      />{" "}
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].tel}
        email={contacts[3].email}
        company={contacts[3].company}
      />{" "}
      <Card
        name={contacts[4].name}
        img={contacts[4].imgURL}
        tel={contacts[4].tel}
        email={contacts[4].email}
        company={contacts[4].company}
      />
      <Card
        name={contacts[5].name}
        img={contacts[5].imgURL}
        tel={contacts[5].tel}
        email={contacts[5].email}
        company={contacts[5].company}
      />{" "}
    </div>
  );
}

export default App;
