import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/nav.css";
const Navbar = ({ user }) => {
  return (
    <nav>
      <div className="logo">
        <FaHome />
        <h2 className="logo__name">funny movies</h2>
      </div>
      <div className="user">
        <span>hello, {user}</span>
        <Link to="/share" className="btn btn--share">
          Share a video
        </Link>
        <Link to="/register" className="btn btn--register">
          logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
