import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../config/firebase";
import md5 from "md5";
export const Register = () => {
  const [isMember, setIsMember] = useState(false);
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error.length > 0 && <h3>{error}</h3>}
      <h3>
        already user?{" "}
        <Link to="/login" className="btn btn--login">
          login
        </Link>
      </h3>
    </>
  );
};
