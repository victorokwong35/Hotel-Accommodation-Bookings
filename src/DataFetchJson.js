import axios from "axios";
import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import "./DataFetchJson.css";
import Data from "./db.json";

export default function DataFetch() {
  const [renderRooms, setrenderRooms] = useState();
  //   const [availableRooms, setAvailableRooms]
  //   const [hallData, setHallData] = useState([]);
  // const [roomsData, setRoomsData] = useState([]);
  //   const [roomsByHallId, setRoomsByHallId] = useState([]);

  const [roomToBook, setRoomToBook] = useState(null);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isRoomAvailable, setIsRoomAvailable] = useState(false);
  const [active, setActive] = useState(false);

  const activeToggle = () => {
    setActive(true);
  };

  const openModal = (room) => {
    setRoomToBook(room);
    setModal(true);
  };

  const successModal = (room) => {
    setSuccess(true);
  };

  const closeModal = () => {
    setRoomToBook(null);
    setModal(false);
    setSuccess(false);
  };

  const confirmRoom = () => {
    // console.log(roomToBook);
    let payload = {
      hallId: roomToBook.hallId,
      roomNo: roomToBook.roomNo,
      matricNo: "000000001",
    };

    axios
      .post(`http://mockaccommodation.tranzgate.com.ng/api/rooms`, payload)
      .then((res) => {
        debugger;
        console.log("Posting data to API", res);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
    setModal(false);
    successModal();
  };

  //mockaccommodation.tranzgate.com.ng/api/halls
  //mockaccommodation.tranzgate.com.ng/api/rooms?hallId=mariere

  // const arr = Data.map((data) => {
  //   return (
  //     <div className="">
  //       <div
  //         key={data.hallId}
  //         className="halls__Box"
  //         onClick={() => {
  //           setrenderRooms(roomArray);
  //         }}
  //       >
  //         <h5>Hall Listed</h5>
  //         <h2>
  //           <strong>{data.hallName}</strong>
  //         </h2>
  //       </div>
  //     </div>
  //   );
  // });

  let hall1data = Data[0];
  let hall2data = Data[1];

  const arr1 = (
    <div className="">
      <div
        className="halls__Box"
        onClick={() => {
          setrenderRooms(room1Array);
        }}
      >
        <h5>Hall Listed</h5>
        <h2>
          <strong>{hall1data.hallName}</strong>
        </h2>
      </div>
    </div>
  );

  const arr2 = (
    <div className="">
      <div
        className="halls__Box"
        onClick={() => {
          setrenderRooms(room2Array);
        }}
      >
        <h5>Hall Listed</h5>
        <h2>
          <strong>{hall2data.hallName}</strong>
        </h2>
      </div>
    </div>
  );

  const room1Array = (
    <div className="Floor--container">
      <div className="navBar">
        <h3>{hall1data.hallId} Hall</h3>
        <p>List of {hall1data.hallName} floors and rooms available</p>
      </div>
      <div>
        {hall1data.floor.map((room, index) => {
          return (
            <div>
              <h5
                style={{
                  marginLeft: "30px",
                  textDecoration: "underline",
                }}
              >
                Floor 0{index}
              </h5>

              <div className="Floor--body">
                {room.map((rooms) => (
                  <div
                    className="Floor--box"
                    style={
                      rooms.spacesLeft === 0
                        ? { backgroundColor: "#dbdbdb" }
                        : { backgroundColor: "#BFDEFF" }
                    }
                    onClick={() =>
                      rooms.spacesLeft === 0 ? false : openModal(rooms)
                    }
                  >
                    {/* <div className="activeClick"></div> */}
                    <h5>{rooms.roomNo}</h5>
                    <h6>({rooms.spacesLeft})</h6>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const room2Array = (
    <div className="Floor--container">
      <div className="navBar">
        <h3>{hall2data.hallId} Hall</h3>
        <p>List of {hall2data.hallName} floors and rooms available</p>
      </div>
      <div>
        {hall2data.floor.map((room, index) => {
          return (
            <div>
              <h5
                style={{
                  marginLeft: "30px",
                  textDecoration: "underline",
                }}
              >
                Floor 0{index}
              </h5>

              <div className="Floor--body">
                {room.map((rooms) => (
                  <div
                    className="Floor--box"
                    style={
                      rooms.spacesLeft === 0
                        ? { backgroundColor: "#dbdbdb" }
                        : { backgroundColor: "#BFDEFF" }
                    }
                    onClick={() =>
                      rooms.spacesLeft === 0 ? false : openModal(rooms)
                    }
                  >
                    <h5>{rooms.roomNo}</h5>
                    <h6>({rooms.spacesLeft})</h6>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <div className="halls__Container">
        {arr1}
        {arr2}
      </div>
      <div>{renderRooms}</div>

      <Dialog onClose={closeModal} open={modal} maxWidth="md">
        <DialogTitle>
          <h4>Are you sure you want to book this room?</h4>
        </DialogTitle>
        <div className="bookingsButton">
          <Button onClick={confirmRoom}>Confirm Booking</Button>
          <Button onClick={closeModal}>Cancel Booking</Button>
        </div>
      </Dialog>

      <Dialog onClose={closeModal} open={success} maxWidth="md">
        <DialogTitle>
          <h4>Congratulations, Your room has been successfully booked.</h4>
          <Button onClick={closeModal}>Continue</Button>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
