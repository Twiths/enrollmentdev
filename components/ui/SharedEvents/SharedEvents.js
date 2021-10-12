import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
const SharedEvents = () => {
  return (
    <div>
      <Card
        className="h-100"
        style={{
          borderRadius: "1rem",
          boxShadow: "3px 4px 0 rgba(9,102,145, 0.05)",
        }}
      >
       <Card.Img  variant="top" src="https://res.cloudinary.com/devs4devs/image/upload/v1632282791/land_mcphaf.jpg"  width="352px" height="160px"  />   
       <Card.Body> 
<Card.Title><a style={{ textDecoration: 'none', color:"#000", fontWeight:"600"}} >title</a></Card.Title> <hr />  
<Card.Text>excerpt</Card.Text>      </Card.Body>     
      </Card>
    </div>
  );
};

export default SharedEvents;


