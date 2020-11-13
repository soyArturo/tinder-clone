import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
const Cards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://static.reuters.com/resources/r/?m=02&d=20200604&t=2&i=1521157299&r=LYNXMPEG53266&w=800",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://d500.epimg.net/cincodias/imagenes/2019/10/25/companias/1571997196_922533_1571997255_noticia_normal.jpg",
    },
  ]);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}>
            <h2>{person.name}</h2>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
