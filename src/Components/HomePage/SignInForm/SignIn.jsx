import { useState } from "react";
import "./SignIn.css";
import SignInHeader from "./SignInHeader/SignInHeader";
import "../SignInForm/SignInHeader/SignInHeader.css";
import axios from "axios";

const userData = {
  email: "",
  password: "",
};

function SignIn({ onClick }) {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await axios
        .post("https://safe-eyrie-23497.herokuapp.com/signin", formData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", res.data.user.first_name);
            alert("You are successfully logged in, Click Ok to Continue");
            window.location = "/";
          }
        });
    } catch (err) {
      console.log("error :", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="boxmodal">
        <SignInHeader onClick={onClick} />
        <div className="loginContainer">
          <p>All fields are required unless marked optional. </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={handleChange}
              required={true}
              name="email"
              type="email"
              placeholder="Email"
            />

            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required={true}
              minLength="8"
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
            {/* <div className="SignIn_footer"></div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
