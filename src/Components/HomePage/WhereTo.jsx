import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../Styles/WhereTo.css";
import "../../Styles/RoomsGuestsButton.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import DatePicker from "@mui/lab/DatePicker";
import { Dropdown } from "react-bootstrap";

function WhereTo() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    query: "",
    check_in: "",
    check_out: "",
    no_of_rooms: "",
    no_of_adults: "",
    no_of_kids: "",
    total_guests: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const no_Of_Rooms = formValues.length;
    const no_Of_Adults = formValues.reduce((accumulator, item) => {
      return accumulator + item.Adults;
    }, 0);
    const no_Of_Kids = formValues.reduce((accumulator, item) => {
      return accumulator + item.Kids;
    }, 0);
    let guests = add(no_Of_Adults.toString().split("").map(Number));
    let kids = add(no_Of_Kids.toString().split("").map(Number));
    let startDate = (formData.no_of_rooms = no_Of_Rooms);
    formData.no_of_adults = guests;
    formData.no_of_kids = kids;
    formData.total_guests = guests + kids;
    localStorage.setItem("query", formData.query);
    localStorage.setItem("kids", formData.no_of_kids);
    localStorage.setItem("adults", formData.no_of_adults);
    localStorage.setItem("checkIn", formData.check_in.date);
    localStorage.setItem("checkOut", formData.check_out.date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const no_Of_Rooms = formValues.length;
    const no_Of_Adults = formValues.reduce((accumulator, item) => {
      return accumulator + item.Adults;
    }, 0);
    const no_Of_Kids = formValues.reduce((accumulator, item) => {
      return accumulator + item.Kids;
    }, 0);
    let guests = add(no_Of_Adults.toString().split("").map(Number));
    let kids = add(no_Of_Kids.toString().split("").map(Number));
    formData.no_of_rooms = no_Of_Rooms;
    formData.no_of_adults = guests;
    formData.no_of_kids = kids;
    formData.total_guests = guests + kids;
    localStorage.setItem("query", formData.query);
    localStorage.setItem("kids", formData.no_of_kids);
    localStorage.setItem("adults", formData.no_of_adults);
    history.push("/HiltonHotels/Location");
  };

  useEffect(() => {
    if (checkIn !== null) {
      let checkInDate = checkIn.toString().split(" ");
      let day = checkInDate[0];
      let month = checkInDate[1];
      let date = checkInDate[2];
      let year = checkInDate[3];
      let checkin = Object.assign({ day, month, date, year });
      formData.check_in = checkin;
    }
  }, [checkIn]);

  useEffect(() => {
    if (checkOut !== null) {
      let checkOutDate = checkOut.toString().split(" ");
      let day = checkOutDate[0];
      let month = checkOutDate[1];
      let date = checkOutDate[2];
      let year = checkOutDate[3];
      let checkout = Object.assign({ day, month, date, year });
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
            required={true}
            placeholder="City, state, location or airpot"
            name="query"
            onChange={handleChange}
            id="where-to-input"
            type="text"
          />
        </div>

        {/* <-------------- Calender Box --------------> */}
        <div className="checkin_and_checkout">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <h5>Check In</h5>
              <DatePicker
                required={true}
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
                required={true}
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
                <form onSubmit={handleUpdate}>
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
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {/* -------------- Buttons ------------- */}

          <Button variant="outlined" id="special-rates">
            Special Rates
          </Button>
          <Button variant="contained" onClick={handleSubmit} id="find-a-hotel">
            Find a Hotel
          </Button>
        </div>
      </div>
    </>
  );
}

export default WhereTo;
