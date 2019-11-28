import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { Data, SHARE_MOVIE } from "../components/Store";
import fire from "../config/firebase";
import classes from "../styles/share.module.css";
export const Share = () => {
  const { state, dispatch } = useContext(Data);
  const moviesReffire = fire.database().ref("movies");
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => console.log("signed out"))
      .catch(err => console.error(err));
  };
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const isValidForm = (title, url) => title.length || url.length;
  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = url.match(/[a-zA-z0-9]+$/gi).join("");
    if (isValidForm(title, url)) {
      console.log("yes");
      moviesReffire.set({
        src: `https://www.youtube.com/embed/${newUrl}`,
        title,
        sharedBy: state.user.email
      });
      dispatch({
        type: SHARE_MOVIE,
        payload: {
          src: `https://www.youtube.com/embed/${newUrl}`,
          title,
          sharedBy: state.user.email
        }
      });
      history.push("/");
    }
    setTitle("");
    setUrl("");
  };
  return (
    <div>
      <Navbar
        user={state.user.email}
        image={state.user.photoURL}
        handleLogout={handleLogout}
      />
      <form className={classes.shareForm} onSubmit={handleSubmit}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>Share a youtube movie</legend>
          <div className={classes.inputContainer}>
            <label htmlFor="title" className={classes.label}>
              Movie Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={classes.input}
              placeholder="Enter Your Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="youtube" className={classes.label}>
              {" "}
              youtube url:
            </label>
            <input
              type="text"
              name="youtube"
              id="youtube"
              className={classes.input}
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <button type="submit" className={classes.shareBtn}>
            share
          </button>
        </fieldset>
      </form>
    </div>
  );
};
