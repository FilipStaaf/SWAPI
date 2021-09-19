import React from "react";
import {useHistory} from "react-router-dom";


export const MovieInfo = ({ movies, movieHandler }) => {
  const history = useHistory();

  const listHandler = () => {
    const moviesCharacter = movies;
    movieHandler(moviesCharacter);
     history.push("/Character");
  };


  return(
      <div bg="primary" style={{ width: "12rem" }} onClick={listHandler}>
        <div style={{borderBottom:"5px solid black"}} >
          <div style={{ color: "red", fontSize: "15px" }}>Title:{movies.title} ReleaseDate: {movies.release_date}</div>
        </div>
      </div>
  );
};