import React, { Component } from "react";
import Products from "./Products";

class Home extends Component {
  render() {
    return (
      <div className="hero">
        <div className="card bg-dark text-white">
          <img
            src="./assets/banner.webp"
            className="card-img"
            alt="..."
            height="500px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bold">
                NEW SEASON ARRIVAL
              </h5>
              <p className="card-text lead fs-2">CHECK OUTS ALL THE TREND</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    );
  }
}

export default Home;
