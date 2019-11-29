import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../config/firebase";
import md5 from "md5";
import classes from "../styles/register.module.css";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usersRef, setUsersRef] = useState(fire.database().ref("users"));
  const isFieldsEmpty = (email, password) => !email.length || !password.length;
  const isFormValid = () => {
    if (isFieldsEmpty(email, password)) {
      setError("fill all fields please");
      return false;
    } else {
      return true;
    }
  };
  const saveUsers = createdUser =>
    usersRef.child(createdUser.user.uid).set({
      email: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid()) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(createUser => {
          createUser.user
            .updateProfile({
              displayName: email,
              photoURL: `https://www.gravatar.com/avatar/${md5(
                createUser.user.email
              )}?d=identicon`
            })
            .then(() => {
              saveUsers(createUser).then(() => console.log("user saved"));
            });
        })
        .catch(err => console.error(err));
      setEmail("");
      setPassword("");
      setError("");
    }
  };
  return (
    <>
      <h2 className={classes.formTitle}>Register to funny movies app</h2>
      <form onSubmit={handleSubmit} className={classes.registerForm}>
        <input
          type="email"
          name="email"
          id="email"
          className={classes.myInput}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          className={classes.myInput}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className={classes.submitBtn}>
          Submit
        </button>
      </form>
      {error.length > 0 && <h3>{error}</h3>}
      <h3 className={classes.alreadyUser}>
        already user?{" "}
        <Link to="/login" className={classes.submitBtn}>
          login
        </Link>
      </h3>
    </>
  );
};
