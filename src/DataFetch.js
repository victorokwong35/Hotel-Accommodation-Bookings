import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataFetchJson.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

export default function DataFetch() {
  const [hallData, setHallData] = useState([]);
  const [roomsData, setRoomsData] = useState([]);
  const [roomToBook, setRoomToBook] = useState(null);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [norooms, setNoRooms] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState();
  const [activeRoom, setActiveRoom] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://mockaccommodation.tranzgate.com.ng/api/halls")
      .then((res) => {
        setHallData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getRoomByHallId = (id) => {
    setContentLoading(true);
    axios
      .get(`http://mockaccommodation.tranzgate.com.ng/api/rooms?hallId=${id}`)
      .then((res) => {
        setRoomsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setContentLoading(false);
      });
  };

  const confirmRoom = () => {
    let payload = {
      hallId: roomToBook.hallId,
      roomNo: roomToBook.roomNo,
      matricNo: "000000001",
    };

    axios
      .post(`http://mockaccommodation.tranzgate.com.ng/api/rooms`, payload)
      .then((res) => {
        getRoomByHallId(roomToBook.hallId);
        // debugger;
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
    setModal(false);
    successModal();
  };

  const openModal = (innerItem) => {
    setRoomToBook(innerItem);
    setModal(true);
  };

  const successModal = () => {
    setSuccess(true);
  };
  const unAvailable = () => {
    setNoRooms(true);
  };

  const closeUnavailable = () => setNoRooms(false);

  const closeModal = () => {
    setRoomToBook(null);
    setModal(false);
  };

  const closeSuccess = () => {
    setSuccess(false);
  };

  const hallArray = hallData.map((data, index) => {
    const switchName = () =>
      getRoomByHallId(data.hallId ? setName(data.hallName) : {});

    return (
      <div className="halls__Container">
        <div
          className="halls__Box"
          onClick={() => {
            getRoomByHallId(data.hallId);
            switchName();
          }}
          key={index}
        >
          <h5>Hall Listed</h5>
          <h2>{data.hallName}</h2>
          <p>{data.hallId}</p>
        </div>
      </div>
    );
  });

  const roomArray = roomsData.map((item, index) => {
    let totalSpacesLeft = item
      .map((space) => space.spacesLeft)
      .reduce((a, b) => a + b);
    return (
      <div key={index} className="Floor--container">
        <div className="navBar">
          <h4>
            This is {name} Floor {index} Listed
          </h4>
        </div>
        <h5 className="floorText">
          We have {totalSpacesLeft} rooms currently available on Floor {index}
        </h5>

        <div className="Floor--body">
          {item.map((innerItem, index) => {
            return (
              <div
                className={`Floor--box 
                ${innerItem.roomNo === activeRoom && "activeClick"}`}
                key={index}
                style={
                  innerItem.roomNo !== activeRoom
                    ? {
                        backgroundColor:
                          innerItem.spacesLeft === 0 ? "#dbdbdb" : "#BFDEFF",
                      }
                    : {}
                }
                onClick={() => {
                  setActiveRoom(innerItem.roomNo);
                  if (innerItem.spacesLeft !== 0) {
                    openModal(innerItem);
                  } else {
                    unAvailable();
                  }
                }}
              >
                <h5>{innerItem.roomNo}</h5>
                <h6>{innerItem.spacesLeft}</h6>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="hallsListed">
        {isLoading ? (
          <div className="fetching">
            <div className="fetching__Data"></div>
          </div>
        ) : (
          hallArray
        )}
      </div>

      {contentLoading ? (
        <div className="fetching">
          <div className="content__Data"></div>
        </div>
      ) : (
        roomArray
      )}

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
          <Button onClick={closeSuccess}>Continue</Button>
        </DialogTitle>
      </Dialog>

      <Dialog onClose={closeModal} open={norooms} maxWidth="md">
        <DialogTitle>
          <h6>Opps! Room is fully booked</h6>
          <Button onClick={closeUnavailable}>Keep checking</Button>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
