import { useState, useEffect } from "react";
import "../../Styles/WhereTo.css";
import "../../Styles/RoomsGuestsButton.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Dropdown } from "react-bootstrap";

const whereTo = {
  query: "",
  check_in: "",
  check_out: "",
  no_of_rooms: "",
  no_of_guests: "",
};

function WhereTo() {
  const [formData, setFormData] = useState(whereTo);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [formValues, setFormValues] = useState([
    { Room: 1, Adults: 1, Kids: 0 },
  ]);

  const [roomCount, setRoomCount] = useState(2);

  let handleChangeRoomInput = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setRoomCount(roomCount + 1);
    setFormValues([...formValues, { Room: roomCount, Adults: 1, Kids: 0 }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  function add(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    const no_Of_Rooms = formValues.length;
    const no_Of_Guests = formValues.reduce((accumulator, item) => {
      return accumulator + item.Adults;
    }, 0);
    let guests = add(no_Of_Guests.toString().split("").map(Number));
    formData.no_of_rooms = no_Of_Rooms;
    formData.no_of_guests = guests;
    console.log(formData);
  };

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
          <Dropdown className="dropdown_room_menu">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Rooms {formValues.length}, Guests
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="Room_main_Container">
                <form onSubmit={handleSubmit}>
                  {formValues.map((element, index) => (
                    <div className="Room_parent_container">
                      <div className="child-contain-content" key={index}>
                        <h4 name="Room" value={index}>
                          Room {index + 1}
                        </h4>
                        <div className="adult-container">
                          <label>Adults</label>
                          <select
                            className="selectOption"
                            onChange={(e) => handleChangeRoomInput(index, e)}
                            value={element.Adults || 1}
                            name="Adults"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                        <div className="kid-container">
                          <label>Kids</label>
                          <select
                            className="selectOption"
                            onChange={(e) => handleChangeRoomInput(index, e)}
                            value={element.Kids || 0}
                            name="Kids"
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                        </div>
                        {index ? (
                          <button
                            className="Room-remove-button"
                            type="button"
                            onClick={() => removeFormFields(index)}
                          >
                            Remove
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                  <div className="Room-button-section">
                    <button
                      className="Room-add-button"
                      disabled={roomCount === 10}
                      type="button"
                      onClick={() => addFormFields()}
                    >
                      Add
                    </button>
                    <button className="Room-add-button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <button id="special-rates">Special Rates</button>
          <button id="find-a-hotel">Find a Hotel</button>
        </div>
      </div>
    </>
  );
}

export default WhereTo;
