import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarSec = () => {
  return (
    <>
      <Navbar className="justify-content-center" bg="dark" data-bs-theme="dark">
        <Nav className="mx-auto">
          <Nav.Item className="mx-3">
            <Nav.Link>
              <Link className="text-decoration-none text-white-50" to="/home">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <Nav.Link>
              <Link className="text-decoration-none text-white-50" to="/about">
                About
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <Nav.Link>
              <Link className="text-decoration-none text-white-50" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarSec;
