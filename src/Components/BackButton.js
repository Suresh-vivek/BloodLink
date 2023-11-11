import { Link } from "react-router-dom";
import "./BackButton.css";
const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={require("../Assets/back_button.png")}
          className="back-button"
        />
      </Link>
    </div>
  );
};
export default BackButton;
