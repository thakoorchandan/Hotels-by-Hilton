import "../../Styles/Header.css";
import "./SignInForm/SignInHeader/SignInHeader.css";
import { FaUserCircle } from "react-icons/fa";
import SignIn from "./SignInForm/SignIn";
import { useState } from "react";

function Header() {
  const [signInPop, setSignInPop] = useState(false);

  const handleSignInPop = () => {
    setSignInPop(false);
    console.log(signInPop);
  };

  console.log(signInPop);
  return (
    <>
      <div
        className="mainContainer"
        style={{
          display: signInPop ? "flex" : "none",
          overflow: signInPop ? "hidden" : "unset",
        }}
      >
        <SignIn onClick={handleSignInPop} />
      </div>

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
            <a href="location">Locations</a>
            <a href="#">Offers</a>
            <a href="#">Meeting & Events</a>
            <a href="#">Credit Cards</a>
          </div>
          <div className="join-and-signin">
            <button id="join">
              <a href="/HiltonHotels/signup">Join</a>
            </button>
            <div> | </div>
            <button id="signin">
              <a onClick={() => setSignInPop(true)} href="#">
                {/* SIGN IN User Name Should be displayed */}
                Sign In
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
