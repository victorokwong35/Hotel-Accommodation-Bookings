import axios from "axios";
import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import "./DataFetch.css";

export default function DataFetch() {
  const [hallData, setHallData] = useState([]);
  const [roomsData, setRoomsData] = useState([]);

  const [roomToBook, setRoomToBook] = useState(null);
  const [modal, setModal] = useState(false);

  //mockaccommodation.tranzgate.com.ng/api/halls
  //mockaccommodation.tranzgate.com.ng/api/rooms?hallId=mariere

  const getRoomByHallId = (id) => {
    axios
      .get(`http://mockaccommodation.tranzgate.com.ng/api/rooms?hallId=${id}`)
      .then((res) => {
        console.log("Pulling room data from API", res);
        setRoomsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = (room) => {
    setRoomToBook(room);
    setModal(true);
  };

  const closeModal = () => {
    setRoomToBook(null);
    setModal(false);
  };

  const confirmRoom = () => {
    let payload = [];

    axios
      .post(`http://mockaccommodation.tranzgate.com.ng/api/rooms`, payload)
      .then((res) => {
        console.log("Pulling room data from API", res);
        setRoomsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://mockaccommodation.tranzgate.com.ng/api/halls")
      .then((res) => {
        console.log("Pulling data from API", res);
        setHallData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const arr = hallData.map((data, index) => {
    return (
      <div className="halls__Container">
        <div
          className="halls__Box"
          onClick={() => {
            getRoomByHallId(data.hallId);
          }}
          key={index}
          style={{
            cursor: "pointer",
            border: "1px solid red",
            padding: "10px",
          }}
        >
          <h5>Hall Listed</h5>
          <h2>{data.hallName}</h2>
          <p>{data.hallId}</p>
        </div>
      </div>
    );
  });

  const roomArray = roomsData.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          border: "1px solid yellow",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h5>Room No {index} Listed</h5>
        {item.map((innerItem, index) => {
          return (
            <div
              key={innerItem.roomNo}
              // onClick={() => {
              //   openModal(innerItem);
              // }}
              style={{ border: "1px solid black", padding: "4px" }}
            >
              <p>{innerItem.hallId}</p>
              <p>{innerItem.roomNo}</p>
              <p>{innerItem.spacesLeft}</p>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1>Hall API</h1>
        {/* <div className="halls__Container">
          <div className="halls__Box">
            <h5>Halls Listed</h5>
            <h2>This is Mariers Hall</h2>
            <p>With an ID of marier</p>
          </div>
          <div className="halls__Box">
            <h5>Halls Listed</h5>
            <h2>This is Mariers Hall</h2>
            <p>With an ID of marier</p>
          </div>
        </div> */}
        {arr};
      </div>

      <div style={{ marginTop: "40px", border: "2px solid blue" }}>
        {roomArray}
      </div>

      <Dialog onClose={closeModal} open={modal}>
        <DialogTitle>Set backup account</DialogTitle>
        <div>Confirm Room</div>
      </Dialog>
    </div>
  );
}
