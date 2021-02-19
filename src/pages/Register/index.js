import React from "react";
import { RegisterBg } from "../../assets/image";
import { Input, Button, Link } from "../../component";
import { Container, Col, Row, Image } from "react-bootstrap";

const Register = () => {
  return (
    <Container fluid className="d-flex align-items-center">
      <Row>
        <Col md={8}>
          <Row className="left">
            <Image
              src={RegisterBg}
              className="img-fluid"
              alt="image-register"
            />
          </Row>
        </Col>
        <Col md={4}>
          <Row className="p-5 justify-content-center">
            <p className="title">Form Register</p>
            <Input label="Full Name" placeholder="Full Name" />
            <Input label="Email" placeholder="Email" />
            <Input label="Password" placeholder="Password" />
            <Button title="Register" block />
            <Link title="kembali ke login" onClick={() => console.log("tes")} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
