import "./AuthHeader.css";
function AuthHeader() {
  return (
    <div>
      <div className="header_body">
        <a href="/">
          <img
            src="https://www.hilton.com/static_guests_assets/images/honorsLogoAlt.svg"
            alt="logo"
          />
        </a>
      </div>
      <h2 className="header">Join Hilton Honors</h2>
    </div>
  );
}

export default AuthHeader;
