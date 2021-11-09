import React, { useState, useEffect } from "react";
import "./Register.css";
import AuthHeader from "../AuthHeader/AuthHeader";
import termsAndConditionsImage from "../../../images/termsAndConditions.png";
import axios from "axios";
import "../AuthHeader/AuthHeader.css";

const userData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  country: "",
  address_1: "",
  address_2: "",
  zip: "",
  password: "",
};

function Register() {
  const [functional, setFunctional] = useState(true);
  const [formData, setFormData] = useState(userData);
  // const [list, setList] = useState([]);

  useEffect(() => {
    if (formData.password === formData.confirm_password) {
      setFunctional(false);
    }
  }, [formData.password, formData.confirm_password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const userInfo = await axios
        .post("http://localhost:2233/signup", formData)
        .then((res) => {
          if (res.statusText === "OK") {
            alert("You are registered succesfully");
            window.location = "/";
          }
        });
      console.log(userInfo);
    } catch (err) {
      console.log("error :", err);
      alert("Email already exists, Try with a new email");
    }
  };

  return (
    <>
      <AuthHeader />
      <h2 className="header">Join Hilton Honors</h2>
      <div className="parentContainer">
        <p>All fields are required unless marked optional. </p>
        <form onSubmit={(e) => (handleSubmit(e), verifyPassword())}>
          <input
            onChange={handleChange}
            required={true}
            name="first_name"
            placeholder="First name"
          />
          <input
            onChange={handleChange}
            required={true}
            name="last_name"
            placeholder="Last name"
          />
          <input
            onChange={handleChange}
            required={true}
            name="phone"
            placeholder="Enter Mobile Number"
            maxLength="10"
            minLength="10"
          />
          <input
            onChange={handleChange}
            required={true}
            name="email"
            type="email"
            placeholder="Email"
          />
          <select
            required={true}
            id="selectCountry"
            onChange={handleChange}
            name="country"
          >
            <option value="">Select your Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          <input
            onChange={handleChange}
            required={true}
            name="address_1"
            placeholder="Address 1"
          />
          <input
            onChange={handleChange}
            name="address_2"
            placeholder="Address 2 (optional)"
          />
          <input
            onChange={handleChange}
            name="zip"
            required={true}
            maxLength="6"
            minLength="6"
            placeholder="Zip"
          />
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            required={true}
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
          <div>
            <img
              className="termcondition"
              src={termsAndConditionsImage}
              alt="terms and conditions"
            />
          </div>
          <p className="termsConditionInfo">
            By clicking Join I agree to the
            <a href="https://www.hilton.com/en/hilton-honors/terms/">
              {" "}
              Hilton Honors Program Terms and Conditions{" "}
            </a>
            This link opens in a new tab. and I agree to the collection, use,
            sharing and transfer of information as set out in the{" "}
            <a href="https://hiltonhonors3.hilton.com/en_US/policy/global-privacy-statement/index.html">
              {" "}
              Hilton Global Privacy Statement{" "}
            </a>
            . I also agree to receive special offers and promotions from Hilton
            via email and direct mail. I understand that I can unsubscribe from
            offers and promotions by changing my subscription preferences in my
            Hilton Honors profile. California Consumers,
            <a href="https://hiltonhonors3.hilton.com/en_US/policy/global-privacy-statement/index.html#CaliforniaRights">
              {" "}
              learn about{" "}
            </a>{" "}
            Hilton’s collection and use of your personal information.
          </p>

          <input
            disabled={functional}
            className="submitButton"
            type="submit"
            value="Join for Free"
          />
        </form>
        <div className="below_para">
          <p>
            *Must be a Hilton Honors member.{" "}
            <a href="https://www3.hilton.com/en/terms/hhonors-discount.html">
              Terms and conditions apply
            </a>
            .
          </p>
          <p>
            **Standard WiFi is free. Premium has a fee. Not free at properties
            with resort charges.
          </p>
        </div>
      </div>
    </>
  );
}

function verifyPassword() {
  var pw = document.getElementById("password").value;
  var cpw = document.getElementById("confirm_password").value;
  if (pw !== cpw) {
    document.getElementById("message").innerHTML = "**Password doesnt match";
  }
}

export default Register;
