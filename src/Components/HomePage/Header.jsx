import "../../Styles/Header.css";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import "./SignInForm/SignIn.css";
import SignInHeader from "./SignInForm/SignInHeader/SignInHeader";

const userData = {
  email: "",
  password: "",
};

function Header() {
  const [formData, setFormData] = useState(userData);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setList([...list, formData]);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="boxmodal">
          <SignInHeader />
          <div className="loginContainer">
            <p>All fields are required unless marked optional. </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                onChange={handleChange}
                required="true"
                name="email"
                type="email"
                placeholder="Email"
              />

              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                required="true"
                minLength="8"
                // maxLength="15"
                placeholder="Password"
              />
              <div className="psw_validation_info">
                <ul>
                  <li>Must be between 8 and 32 character</li>
                  <li>Contain one uppercase letter</li>
                </ul>
                <ul>
                  <li>Contain one lowercase letter</li>
                  <li>One number (0-9) or one special character</li>
                </ul>
              </div>

              <a href="#">Forgot Your Password</a>
              <input className="loginButton" type="submit" value="Login" />
              <p>
                First Time Signing In ? <a href="#">Create your password </a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="parent-container">
        <div className="header-container">
          <div className="header-logo">
            <img
              src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg"
              alt="logo"
            />
          </div>
          <div className="navlinks">
            <a href="location">Locations</a>
            <a href="#">Offers</a>
            <a href="#">Meeting & Events</a>
            <a href="#">Credit Cards</a>
          </div>
          <div className="join-and-signin">
            <button id="join">
              <a href="/User/register">Join</a>
            </button>
            <div> | </div>
            <button id="signin">
              <a href="/User/login">Sign In</a>
              <FaUserCircle className="user-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
