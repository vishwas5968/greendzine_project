import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bottom">
      <div className="dash">
        <div>
          <Link to="/home">
            <ImHome />
          </Link>
        </div>
        <div>
          <Link to="/user">
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
