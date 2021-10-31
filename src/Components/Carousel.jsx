import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "../Styles/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Carous() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mainCarousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hilton.com/im/en/NoHotel/15548819/15027-full-all-inclusive-hero.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hilton.com/im/en/NoHotel/15621541/1252-corp-connecting-rooms-ohw-room.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 class="carosel-h1">Travel Together, Stay Together</h1>
      <div class="caroselSubheading">
        Introducing Confirmed Connecting Rooms by Hilton, the most reliable way
        to book and instantly confirm connecting rooms.
      </div>
      <button id="learn-more">Learn More</button>
    </div>
  );
}

export default Carous;
