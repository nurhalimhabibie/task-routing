import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarSec = () => {
  return (
    <>
      <Navbar className="justify-content-center" bg="dark" data-bs-theme="dark">
        <Nav className="mx-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarSec;
