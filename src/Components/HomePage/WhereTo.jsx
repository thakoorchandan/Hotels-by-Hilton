import { useState, useEffect } from "react";
import "../../Styles/WhereTo.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const whereTo = {
  query: "",
  check_in: "",
  check_out: "",
  no_of_rooms: "",
  no_of_guests: "",
  usePoints: "",
  travelAgents: "",
  AAA_Rate: "",
  seniorRate: "",
  governmentRates: "",
  promotion_Code: "",
};

function WhereTo() {
  const [formData, setFormData] = useState(whereTo);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (checkIn !== null) {
      let checkInDate = checkIn.toString().split(" ");
      let weekDay = checkInDate[0];
      let month = checkInDate[1];
      let day = checkInDate[2];
      let checkin = Object.assign({ weekDay, month, day });
      formData.check_in = checkin;
    }
  }, [checkIn]);
  useEffect(() => {
    if (checkOut !== null) {
      let checkOutDate = checkOut.toString().split(" ");
      let weekDay = checkOutDate[0];
      let month = checkOutDate[1];
      let day = checkOutDate[2];
      let checkout = Object.assign({ weekDay, month, day });
      formData.check_out = checkout;
    }
  }, [checkOut]);

  return (
    <>
      {/* <!------------ Where To ? ----------------> */}
      <div className="where-to-container">
        <div id="search-where-to">
          <h1 id="where-to">Where To ?</h1>
          <input
            name="query"
            onChange={handleChange}
            id="where-to-input"
            type="text"
            placeholder="City, state, location or airpot"
          />
        </div>

        {/* <-------------- Calender Box --------------> */}
        <div className="checkin_and_checkout">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <h5>Check In</h5>
              <DatePicker
                // label="Check-In"
                value={checkIn}
                onChange={(newValue) => {
                  setCheckIn(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div>
              <h5>Check Out</h5>
              <DatePicker
                value={checkOut}
                onChange={(newValue) => {
                  setCheckOut(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </LocalizationProvider>
        </div>

        {/* <!------------ Where To Buttons ? --------------> */}
        <div className="setRooms">
          <button id="1room-1guest">1 Room, 1 Guest</button>
          <button id="special-rates">Special Rates</button>
          <button id="find-a-hotel">Find a Hotel</button>
        </div>
      </div>
    </>
  );
}

export default WhereTo;
