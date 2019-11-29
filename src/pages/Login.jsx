import React, { useState } from "react";
import fire from "../config/firebase";
import { Link } from "react-router-dom";
import { Register } from "./Register";
import classes from "../styles/register.module.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailChanged = e => setEmail(e.target.value);
  const handlePasswordChanged = e => setPassword(e.target.value);
  const isFormValid = () => email && password;
  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid()) {
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(signedInUser => console.log(signedInUser))
        .catch(err => {
          console.error(err);
          setError(err);
        });
    }
  };
  return (
    <div>
      <h2 className={classes.formTitle}>Login to funny movies app</h2>
      <form onSubmit={handleSubmit} className={classes.registerForm}>
        <input
          type="email"
          name="email"
          id="email"
          className={classes.myInput}
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChanged}
        />
        <input
          type="password"
          name="password"
          id="password"
          className={classes.myInput}
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChanged}
        />
        <button type="submit" className={classes.submitBtn}>
          login
        </button>
      </form>
      {error.length > 0 && <h3>{error}</h3>}
      <h3 className={classes.alreadyUser}>
        don't have an account yet?
        <Link to="/register" className={classes.submitBtn}>
          Register
        </Link>
      </h3>
    </div>
  );
};
