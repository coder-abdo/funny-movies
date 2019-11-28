import React, { useState } from "react";
import fire from "../config/firebase";
import { Link } from "react-router-dom";
import { Register } from "./Register";
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
      <h2>Login to funny movies app</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChanged}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={password}
          onChange={handlePasswordChanged}
        />
        <button type="submit">login</button>
      </form>
      {error.length > 0 && <h3>{error}</h3>}
      <h3>
        don't have an account yet?<Link to="/register">Register</Link>
      </h3>
    </div>
  );
};
