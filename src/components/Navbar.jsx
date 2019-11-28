import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <FaHome />
        <h2 className="logo__name">funny movies</h2>
      </div>
      <Link to="/register" className="btn btn--register">
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
