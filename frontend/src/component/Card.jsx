import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';



function Cd(props) {
async function del() {
  console.log('Delete button clicked');  
 let conf= window.confirm("Are you sure you want to delete this product?")
  if (conf) 
{await axios.delete(`http://localhost:3000/api/test/${props.id}`);}
window.location.href = "https://ecomm-2-cyzt.onrender.com"; // Redirect to home after deleting product
}

    console.log('Card props:', props); // Log the props to see what is being passed
  return (
    <Card style={{ width: '18vw',height:"49vh" , margin: '20px', backgroundColor: 'lightgreen', objectFit:"cover"}}>
      <Card.Img variant="top" src={props.image} style={{height:"13rem"}} />
      <Card.Body>
        <Card.Title>{`${props.name.toUpperCase()}`}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:"lightpink"}}>Price : {props.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body  style={{height:"48px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Button onClick={del}  >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Cd;
