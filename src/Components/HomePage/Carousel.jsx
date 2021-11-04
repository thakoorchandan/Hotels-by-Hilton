import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "../../Styles/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Carous() {
  return (
    <div class="header-carousel">
      <div class="container mt-4">
        <div
          id="carousel-example-1z"
          class="carousel slide carousel-fade mb-5"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carousel-example-1z"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://www.hilton.com/im/en/NoHotel/15548819/15027-full-all-inclusive-hero.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
                alt="First slide"
              />
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.hilton.com/im/en/NoHotel/15621541/1252-corp-connecting-rooms-ohw-room.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
                alt="Second slide"
              />
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carousel-example-1z"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carousel-example-1z"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
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
