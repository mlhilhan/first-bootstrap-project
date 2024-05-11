import React from "react";
import { Button } from "react-bootstrap";
import { BsPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container-fluid p-5 light-yellow-bg">
      <div className="row">
        <div className="col-md-6">
          <div
            className="text-left"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Collectible Sneakers
          </div>
          <p className="text-left mt-3" style={{ fontSize: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
          <div className="d-flex mb-4">
            <Button variant="outline-warning" className="me-3">
              Sign Up Now
            </Button>
            <Button variant="link" className="text-black">
              <BsPlayFill className="me-2" />
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://m.media-amazon.com/images/I/71AlnxaNXKL._AC_UY900_.jpg"
            alt="Sneakers"
            className="img-fluid sneakers-image"
            style={{ width: "70%" }}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <div className="d-flex justify-content-center">
            <div className="info-lorem mx-3">
              <BsPlayFill className="info-icon" />
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="info-lorem mx-3">
              <BsPauseFill className="info-icon" />
              <p className="info-text">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="info-lorem mx-3">
              <BsStopFill className="info-icon" />
              <p className="info-text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
