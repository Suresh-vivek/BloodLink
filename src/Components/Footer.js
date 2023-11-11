import "./Footer.css";

const Footer = () => {
  return <div className="footer">
    <img src={require("../Assets/mingcute_linkedin-line.png")} className="footer-image"/>
    <img src={require("../Assets/simple-icons_instagram.png")} className="footer-image"/>
    <img src={require("../Assets/mdi_gmail.png")} className="footer-image"/>
    <img src={require("../Assets/teenyicons_twitter-solid.png")} className="footer-image"/>
    <img src={require("../Assets/entypo-social_facebook.png")} className="footer-image"/>


  </div>;
};

export default Footer;
