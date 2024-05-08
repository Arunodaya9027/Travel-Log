import React from "react";
import { Card, Button } from "react-bootstrap";
import "./IndianCardStyle.css"
function CardMod({ title, state, src, content, handleSubmit }) {
  return (
    <div>
    
      <Card style={{ width: "18rem" }}>
        <Card.Title style={{fontSize:"2rem"}}>{title}</Card.Title>
        <Card.Title style={{fontSize:"1.5rem"}} className="italic">{state}</Card.Title>
        <Card.Body className="card-body">
          <Card.Img style={{height:"200px"}} src={src} />
          <Card.Text>
            {content.slice(0, 75)}
            <p style={{color: "#084298"}}><b>....read more</b></p>
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
