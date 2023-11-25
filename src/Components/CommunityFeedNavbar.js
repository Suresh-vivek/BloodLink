import React from "react";
import "./CommunityFeedNavbar.css";
import { Link } from "react-router-dom";

const CommunityFeedNavbar = () => {
  return (
    <div className="outer-nav">
      <div className="navbar-left">
        <span className="text"> Community Feed</span>
      </div>

      <div className="navbar-right">
        <Link to="/">
          <img src={require("../Assets/logo.png")} className="nav-image1" />
        </Link>
      </div>
    </div>
  );
};

export default CommunityFeedNavbar;
