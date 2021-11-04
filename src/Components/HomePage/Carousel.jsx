import "../../Styles/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Carous() {
  return (
    <div className="header-carousel">
      <div className="container mt-4">
        <div
          id="carousel-example-1z"
          className="carousel slide carousel-fade mb-5"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-1z"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://www.hilton.com/im/en/NoHotel/15548819/15027-full-all-inclusive-hero.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
                alt="First slide"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.hilton.com/im/en/NoHotel/15621541/1252-corp-connecting-rooms-ohw-room.jpg?impolicy=crop&cw=4500&ch=2344&gravity=NorthWest&xposition=0&yposition=327&rw=1184&rh=617"
                alt="Second slide"
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carousel-example-1z"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-1z"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <h1 className="carosel-h1">Travel Together, Stay Together</h1>
      <div className="caroselSubheading">
        Introducing Confirmed Connecting Rooms by Hilton, the most reliable way
        to book and instantly confirm connecting rooms.
      </div>
      <button id="learn-more">Learn More</button>
    </div>
  );
}

export default Carous;
