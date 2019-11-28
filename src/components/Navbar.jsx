import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "../styles/nav.module.css";
const Navbar = ({ user, handleLogout, image }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <FaHome />
        <h2 className={classes.logoName}>funny movies</h2>
      </div>
      <div className={classes.user}>
        <img src={image} alt="user photo" />
        <span>welcome, {user}</span>
        <Link to="/share" className={`${classes.btn} ${classes.btnShare}`}>
          Share a video
        </Link>
        <Link
          to="/register"
          className={`${classes.btn} ${classes.btnShare}`}
          onClick={handleLogout}
        >
          logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
