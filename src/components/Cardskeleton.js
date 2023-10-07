import React from "react";
import { Card } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";


// skeletons for cards inside home 


function Cardskeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((card, i) => (
      <Card
        style={{ width: "300px" }}
        className="card-skeleton mx-auto"
        key={i}
      >
        <Card.Img variant="top" src="https://placehold.co/300x440" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={10} />
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Body>
      </Card>
    ));
}

export default Cardskeleton;
