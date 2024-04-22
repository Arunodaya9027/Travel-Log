import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../../public/styles/Explore.css"
function CardMod({ id, title, src, content, handleSubmit }) {
  return (
    <div>
    
      <Card style={{ width: "18rem" }} key={id}>
        <Card.Title style={{fontSize:"2rem"}}>{title}</Card.Title>
        <Card.Body className="card-body">
          <Card.Img style={{height:"200px"}} src={src} />
          <Card.Text>
            {content.slice(0, 70)}
            <p>....read more</p>
          </Card.Text>
          <Button variant="primary" onClick={handleSubmit}>
            Explore More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardMod;
