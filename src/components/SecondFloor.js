// import { Axios } from "axios";
// import React, { useEffect } from "react";
// import("./SecondFloor.css");

// export default function SecondFloor() {
//   return (
//     <div className="second__Floor--container">
//       <div className="second__navBar">
//         <h5>Second floor</h5>
//         <p>5 rooms available</p>
//       </div>
//       <div className="second__Floor--body">
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         <div className="second__Floor--box">
//           <h5>30</h5>
//           <h6>(3)</h6>
//         </div>
//         {/* <div className="box__Container">

//             </div> */}
//       </div>
//     </div>
//   );
// }

import "./SecondFloor.css";
import React, { Component } from "react";
import axios from "axios";

export default class SecondFloor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeState: [""],
    };
  }

  componentDidMount() {
    axios
      .get("http://mockaccommodation.tranzgate.com.ng/api/halls")
      .then((data) => {
        console.log(data);
        this.setState(
          {
            homeState: data,
          },
          () => {
            console.log(this.state.homeState);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="second__Floor--container">
          <div className="second__navBar">
            <h5>Second floor</h5>
            <p>5 rooms available</p>
          </div>
          <div className="second__Floor--body">
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
            <div className="second__Floor--box">
              <h5>30</h5>
              <h6>(3)</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
