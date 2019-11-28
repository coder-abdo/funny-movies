import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Data } from "../components/Store";
import { Video } from "../components/Video";
export const Home = () => {
  const { state } = useContext(Data);
  return (
    <div>
      <Navbar user={state.user.email} />
      <div className="container">
        <div className="videos">
          {state.movies.length > 0 ? (
            state.movies.map(movie => <Video key={movie.id} {...movie} />)
          ) : (
            <h2>there is no movies yet!</h2>
          )}
        </div>
      </div>
    </div>
  );
};
