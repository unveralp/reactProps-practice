import React from "react";
import Card from "./Card.jsx";
import Contacts from "../contacts.js";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
       name={Contacts[0].name}
       imgURL={Contacts[0].imgURL}
       tel={Contacts[0].phone}
       email={Contacts[0].email}
      />
      
      <Card
       name={Contacts[1].name}
       imgURL={Contacts[1].imgURL}
       tel={Contacts[1].phone}
       email={Contacts[1].email}
      />
     
      <Card
       name={Contacts[2].name}
       imgURL={Contacts[2].imgURL}
       tel={Contacts[2].phone}
       email={Contacts[2].email}
      />
    </div>
    
  );
}

export default App;
