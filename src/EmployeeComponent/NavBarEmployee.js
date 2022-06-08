import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavDropdown,
  Offcanvas,
  Button,
  FormControl,
  Form,
  Nav,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const NavBarEmployee = (props) => {
  const [name, setName] = useState("");

  const getValueSearch = (e) => {
    setName(e.target.value);
    props.onSubmit(name);
    console.log("nav get serach", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/add-employee" className="btn btn-success">
              Add Employee
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarEmployee;
