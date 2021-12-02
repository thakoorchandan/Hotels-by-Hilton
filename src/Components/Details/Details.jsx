import "./Details.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../HomePage/Header";
import WhereTo from "../HomePage/WhereTo";
import CheckIcon from "@mui/icons-material/Check";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import Payment from "../Payment/Payment";
import { NavLink } from "react-router-dom";

function Details() {
  const [details, setDetails] = useState([]);
  const [no_ofRooms, setNo_ofRooms] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [updateStay, setUpdateStay] = useState(false);
  const [open, setOpen] = useState(false);
  const [pickedRoom, setPickedRoom] = useState([]);
  const { id } = useParams();

  var stay = Math.abs(
    localStorage.getItem("checkIn") - localStorage.getItem("checkOut")
  );

  const special_rates = Math.abs(stay * 1000 - 1200);

  const normal_rates = Math.abs(stay * 1000);

  useEffect(() => {
    const { data } = axios
      .get(
        `https://safe-eyrie-23497.herokuapp.com/locations/Hyderabad/Hotels/${id}`
      )
      .then((res) => {
        let collections = res;
        setDetails(collections.data);
        setNo_ofRooms(collections?.data?.hilton_rooms?.length);
      });
  }, []);

  // Yellow section Text slider
  const [textSlide, setTextSlide] = useState(0);

  const plusSlides = (value) => {
    setTextSlide(textSlide + value);
  };

  // Update Stay
  const handleToggle = () => {
    setUpdateStay(!updateStay);
  };

  // Check Box states
  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const handleCheckbox2 = (event) => {
    setChecked2(event.target.checked);
  };

  // PAYMENT POPUP and CLOSE
  const handleClickOpen = (id) => {
    const result = details.hilton_rooms.filter((item) => item.id === id);
    setOpen(true);
    setPickedRoom(result);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Yellow Section */}
      <div className="yellow_section">
        <div className="slideshow-container">
          <div className="mySlides">
            <h3>
              {textSlide === 0
                ? "What To Expect During Your Visit"
                : textSlide === 1
                ? "Hotel Travel Guidelines"
                : textSlide === 2
                ? "Goods and Service Tax"
                : ""}
              <a>Learn More</a>
            </h3>
          </div>

          <button
            disabled={textSlide === 0}
            className="prev"
            onClick={() => plusSlides(-1)}
          >
            ❮
          </button>
          <button
            disabled={textSlide === 2}
            className="next"
            onClick={() => plusSlides(1)}
          >
            ❯
          </button>
        </div>
      </div>

      {/* Where To Section */}
      <div className="where_to_pop">
        <Button
          style={{ whiteSpace: "nowrap", backgroundColor: "rgb(16,76,151)" }}
          variant="contained"
          onClick={handleToggle}
        >
          Update-Stay
        </Button>
      </div>
      {updateStay ? <WhereTo /> : null}

      {/* Steps to select a room */}
      <div className="select_a_room">
        <p>Step 1 of 3</p>
        <h1>Select a Room</h1>
        <div className="img">
          <img src={details.photo} alt="image" />
          <div className="hotel_name_logo">
            <img
              src="https://www.hilton.com/modules/assets/svgs/logos/bug/HI.svg"
              alt="name"
            />
            <h5>{details.name}</h5>
          </div>
        </div>
        <h3>Your stay includes</h3>
        {details.facilities?.map((item) => (
          <div className="contains" key={item.facility}>
            <CheckIcon style={{ color: "black" }} />
            {item.facility}
          </div>
        ))}
        <div className="special_Rates">
          <Button variant="outlined" onClick={() => setChecked2(!checked2)}>
            Special Rates
          </Button>

          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckbox} />}
            label="Connecting Rooms"
          />
          <FormControlLabel
            control={<Checkbox checked={checked2} onChange={handleCheckbox2} />}
            label="Use Points & Money"
          />
        </div>
        <h6>We found {no_ofRooms} rooms for you</h6>
      </div>
      {/* Rooms Preview */}
      <div className="no_of_rooms">
        {details.hilton_rooms?.map((item) => (
          <div className="room1">
            <img
              src="https://www.hilton.com/im/en/BOMAPHI/3101835/bomaphi-hilton-guestroom.tif?impolicy=crop&cw=5616&ch=3192&gravity=NorthWest&xposition=0&yposition=269&rw=760&rh=432"
              alt="room"
            />

            <h5>{item.room_spec}</h5>
            {checked2 ? (
              <Button
                variant="contained"
                onClick={() => handleClickOpen(item.id)}
              >
                Book From ₹{Math.abs(item.room_price - special_rates)}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => handleClickOpen(item.id)}
              >
                {/* ROOOM PRICE */}
                Book From ₹{Math.abs(item.room_price - normal_rates)}
              </Button>
            )}
            <p>Plus 5.00% service charge per stay, plus tax</p>
          </div>
        ))}
      </div>

      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            ></IconButton>
            <NavLink to="/" exact={true}>
              <img
                style={{ height: "50px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hilton_Worldwide_logo.svg/1421px-Hilton_Worldwide_logo.svg.png"
                alt="logo"
              />
            </NavLink>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              Payment
            </Typography>

            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        {/* Payment Card */}
        <Payment
          normal_rates={normal_rates}
          special_rates={special_rates}
          stay={stay}
          checked2={checked2}
          handleClose={handleClose}
          room={pickedRoom}
        />
      </Dialog>
    </div>
  );
}

export default Details;

// export default Details;
