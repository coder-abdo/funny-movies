import React from "react";
import "../styles/movies.css";
export const Video = ({ src, title, sharedBy, description }) => {
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="content">
        <h2 className="video-title">{title}</h2>
        <h3 className="video-shredby"> shared by: {sharedBy}</h3>
        <p className="description">
          Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Arcu dictum varius duis at. Ultricies mi eget mauris pharetra et
          ultrices neque ornare aenean.
        </p>
      </div>
    </div>
  );
};
