import React from "react";

import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import { toast, ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import { Button } from "bootstrap";
import { Card, Row, Col } from "reactstrap";
import AddEmployee from "../EmployeeComponent/AddEmployee";
import ListEmployee from "../EmployeeComponent/ListEmployee";
import ListCustomer from "../CustomerComponent/ListCustomer";
import AddCustomer from "../CustomerComponent/AddCustomer"

const Home = () => {
  return (
    <div>
      <Router>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>
          <Col md={8}>
            <Routes>
              <Route
                path="/employee-details"
                element={<ListEmployee />}
                exact
              />
              <Route path="/add-employee" element={<AddEmployee />} exact />
              <Route
                path="/update-employee/:empId"
                element={<AddEmployee />}
                exact
              />
              <Route path="customer-details" element={<ListCustomer />} expect />
              <Route path="add-customer" element={<AddCustomer/>} expect/>
              <Route path="update-customer/:customerId" element={<AddCustomer/>} expect />
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
};

export default Home;
