import "../Styles/Header.css";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="parent-container">
        <div className="header-container">
          <div className="header-logo">
            <img
              src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg"
              alt="logo"
            />
          </div>
          <div className="navlinks">
            <a href="#">Locations</a>
            <a href="#">Offers</a>
            <a href="#">Meeting & Events</a>
            <a href="#">Credit Cards</a>
          </div>
          <div className="join-and-signin">
            <button id="join">Join</button>
            <div> | </div>
            <button id="signin">
              Sign In
              <FaUserCircle className="user-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
