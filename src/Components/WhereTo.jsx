import "../Styles/WhereTo.css";

function WhereTo() {
  return (
    <>
      {/* <!------------ Where To ? ----------------> */}
      <div className="where-to-container">
        <div id="search-where-to">
          <h1 id="where-to">Where To ?</h1>
          <input
            id="where-to-input"
            type="text"
            placeholder="City, state, location or airpot"
          />
        </div>

        {/* <-------------- Calender Box --------------> */}
        <div className="Calender-box">
          <div className="start-date">
            <div id="date">31</div>
            <div className="month-day">
              <div id="month">OCT</div>
              <div id="day">SUN</div>
            </div>
          </div>

          <div className="div-bar"></div>

          <div className="end-date">
            <div id="date">1</div>
            <div className="month-day">
              <div id="month">NOV</div>
              <div id="day">MON</div>
            </div>
          </div>
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
