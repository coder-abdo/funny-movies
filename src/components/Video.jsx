import React from "react";
import classes from "../styles/movies.module.css";
export const Video = ({ src, title, sharedBy, description }) => {
  return (
    <div className={classes.videoContainer}>
      <div className={classes.video}>
        <iframe
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={classes.content}>
        <h2 className={classes.videoTitle}>{title}</h2>
        <h3 className={classes.videoSharedby}> shared by: {sharedBy}</h3>
        <p className={classes.description}>
          Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Arcu dictum varius duis at. Ultricies mi eget mauris pharetra et
          ultrices neque ornare aenean.
        </p>
      </div>
    </div>
  );
};
