import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// style
import "../../assets/styles/navbar.css";

const NavbarPagination = () => {
  return (
    <div className="wrapper-nav">
      <Navbar fixed="top" bg="light">
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand>ASADMOVIES</Navbar.Brand>
          </Link>

          <Nav>
            <Nav.Link>LOGIN</Nav.Link>
            <Nav.Link>REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPagination;
