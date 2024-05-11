import React from "react";
import { Card, Button } from "react-bootstrap";

function Product() {
  return (
    <div id="product" className="container-fluid p-5 bg-dark text-white">
      <h1 className="mb-4">The best of the best</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="outline-light" className="me-3">
          Sign Up Now
        </Button>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card className="text-white" style={{ backgroundColor: "#002d72" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71AlnxaNXKL._AC_UY900_.jpg"
              className="mx-auto d-block"
            />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="light" className="w-100">
                Buy Now
              </Button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-white" style={{ backgroundColor: "#002d72" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71AlnxaNXKL._AC_UY900_.jpg"
              className="mx-auto d-block"
            />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="light" className="w-100">
                Buy Now
              </Button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="text-white" style={{ backgroundColor: "#002d72" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71AlnxaNXKL._AC_UY900_.jpg"
              className="mx-auto d-block"
            />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="light" className="w-100">
                Buy Now
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Product;
