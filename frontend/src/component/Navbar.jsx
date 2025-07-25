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
            <NavLink href="https://ecomm-2-cyzt.onrender.com"   style={{color:"white",border:"solid 3px",backgroundColor:"black", marginLeft:"9px",width:"max-content"}} >Home</NavLink>
            <NavLink href="/"  style={{color:"white",border:"solid 3px",backgroundColor:"black", marginLeft:"9px",width:"max-content"}} >Link</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavLink href="https://ecomm-2-cyzt.onrender.com/add/test" style={{marginRight:'10px',color:'black'}}>
      <Button>Add Product</Button>
      </NavLink>
    </Navbar>
    </div>
  );
}

export default BasicExample;
