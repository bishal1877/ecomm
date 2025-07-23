import React from "react";
import { Button, NavLink } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <div style={{ backgroundColor: '#e57373',padding: '0px' }}>
    <Navbar style={{padding: '0px', display:'flex',justifyContent:'start', transition: 'background-color 0.3s ease-in-out'}}>
      <Container style={{padding: '5px',marginLeft:'6px'}}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink href="http://localhost:5173/" >Home</NavLink>
            <NavLink href="/">Link</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLink href="http://localhost:5173/add/test" style={{marginRight:'10px',color:'black'}}>
      <Button>Add Product</Button>
      </NavLink>
    </Navbar>
    </div>
  );
}

export default BasicExample;
