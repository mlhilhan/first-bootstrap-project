import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

function WhyJoin() {
  return (
    <div
      id="why-join"
      className="container-fluid p-5"
      style={{ backgroundColor: "#ffffc4" }}
    >
      <Container className="py-5" style={{ backgroundColor: "transparent" }}>
        <Row>
          <Col md={6}>
            <Card className="p-4" style={{ backgroundColor: "#ffffff" }}>
              <Card.Body>
                <h2 className="mb-4">Why Join Us?</h2>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
                <Button variant="outline-warning" className="mb-3">
                  Sign Up Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://hwp.com.tr/wp-content/uploads/2022/11/En-Iyi-Video-Oynaticilari.jpg"
              alt="Sample"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyJoin;
