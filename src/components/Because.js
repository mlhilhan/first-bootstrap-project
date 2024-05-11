import React, { useRef } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Because() {
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <div
      id="because"
      className="container-fluid p-5"
      style={{ backgroundColor: "#ffffc4" }}
    >
      <Container>
        <Row className="mb-4">
          <Col xs={6}>
            <h2>Because they love us</h2>
          </Col>
          <Col xs={6} className="text-end">
            <Button
              variant="light"
              className="me-2"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.prev();
                }
              }}
            >
              <BsChevronLeft />
            </Button>
            <Button
              variant="light"
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.next();
                }
              }}
            >
              <BsChevronRight />
            </Button>
          </Col>
        </Row>
        <Carousel
          id="carousel"
          ref={carouselRef}
          interval={null}
          touch={true}
          fade={false}
          indicators={false}
          controls={false}
          onDragStart={handleDragStart}
        >
          {[...Array(6)].map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {[...Array(3)].map((_, cardIndex) => (
                  <Col key={cardIndex} md={4} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>
                          Title {index * 3 + cardIndex + 1}
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
                            alt="Avatar"
                            className="rounded-circle me-2"
                            style={{ width: "30px", height: "30px" }}
                          />
                          <div>
                            <p className="m-0">John Doe</p>
                            <small>Team Lead</small>
                          </div>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Because;
