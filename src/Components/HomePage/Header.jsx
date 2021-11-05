import "../../Styles/Header.css";
import "./SignInForm/SignInHeader/SignInHeader.css";
import { FaUserCircle } from "react-icons/fa";

const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
let keysToRemove = ["token", "username"];

const handleLocalStorage = () => {
  keysToRemove.forEach((k) => localStorage.removeItem(k));
  alert("You are logged out");
};

function Header() {
  return (
    <>
      <div className="parent-container">
        <div className="header-container">
          <div className="header-logo">
            <a href="/">
              <img
                src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="navlinks">
            <a href="/HiltonHotels/location">Locations</a>
            <a href="#">Offers</a>
            <a href="#">Meeting & Events</a>
            <a href="#">Credit Cards</a>
          </div>
          <div className={token ? "joined-and-signed" : "join-and-signin"}>
            {username && token ? (
              <button id="join">
                <a href="/" onClick={handleLocalStorage}>
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
              <a href="/HiltonHotels/signin">
                {username ? username : "Sign In"}
              </a>
              <FaUserCircle className="user-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
