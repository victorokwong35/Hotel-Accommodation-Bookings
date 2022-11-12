import React, { Component } from "react";
import "./ThirdFloor.css";

export default class ThirdFloor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="third__Floor--container">
        <div className="third__navBar">
          <h5>Third floor</h5>
          <p>5 rooms available</p>
        </div>
        <div className="third__Floor--body">
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          <div className="third__Floor--box">
            <h5>30</h5>
            <h6>(3)</h6>
          </div>
          {/* <div className="box__Container">
            
          </div> */}
        </div>
      </div>
    );
  }
}
