import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container className="App mt-5 mb-5">
      <Row className="justify-content-center ">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1 className="mb-4">Palindrome Checker</h1>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
