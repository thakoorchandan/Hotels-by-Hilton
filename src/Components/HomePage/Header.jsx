import "../../Styles/Header.css";
import "./SignInForm/SignInHeader/SignInHeader.css";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

const handleLocalStorage = () => {
  localStorage.clear();
  alert("You are logged out");
};

function Header() {
  return (
    <>
      <div className="parent-container">
        <div className="header-container">
          <div className="header-logo">
            <NavLink to="/" exact={true}>
              <img
                src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/HiltonHotels/Location" exact={true}>
              Locations
            </NavLink>
            <NavLink to="/">Offers</NavLink>
            <NavLink to="/">Meeting & Events</NavLink>
            <NavLink to="/">Credit Cards</NavLink>
          </div>
          <div className={token ? "joined-and-signed" : "join-and-signin"}>
            {username && token ? (
              <button id="join">
                <a href="/HiltonHotels/signin" onClick={handleLocalStorage}>
                  Logout
                </a>
              </button>
            ) : (
              <button id="join">
                <a href="/HiltonHotels/signup">Join</a>
              </button>
            )}

            <div> | </div>
            <button id="signin">
              <NavLink to="/HiltonHotels/signin" exact={true}>
                {username ? username : "Sign In"}
              </NavLink>
              <FaUserCircle className="user-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
