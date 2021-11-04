import "./SignInHeader.css";
function SignInHeader({ onClick }) {
  return (
    <div>
      <div className="signIn_header_body">
        <button onClick={onClick} className="close">
          +
        </button>
        <a href="/">
          <img
            src="https://www.hilton.com/static_guests_assets/images/honorsLogoAlt.svg"
            alt="logo"
          />
        </a>
      </div>
      <h2 className="signInHeader">Join Hilton Honors</h2>
    </div>
  );
}

export default SignInHeader;
