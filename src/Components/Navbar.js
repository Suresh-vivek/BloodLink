import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="outer-nav">
      <div className="nav-left">
        <img src={require("../Assets/logo.png")} className="nav-image" />
        <span>Linking Lifesavers with Life Seekers</span>
      </div>

      <div className="nav-right">
        <div className="links">

          <a href="https://www.eraktkosh.in/BLDAHIMS/bloodbank/stockAvailability.cnt" className="alinks">
            <b>Live Availability</b>
          </a>

          <Link to="contactus">
            <a href="#" className="alinks">
              <b>Contact Us</b>
            </a>
          </Link>

          <Link to="donation"><a href="#" className="alinks">
            <b>Donate</b>
          </a></Link>
          
          <Link to="community"> <a href="#" className="alinks">
            <b>Community</b>
          </a></Link>
         
          <Link to="login"><a href="#" className="nav-login">
            Login
          </a> </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
