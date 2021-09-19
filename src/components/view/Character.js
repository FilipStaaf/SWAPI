import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const Character = ({ moviePeople }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  const charaArr = moviePeople.characters;

  useEffect(() => {
    async function fetchPeople() {
      const movieChararray = await Promise.all(charaArr.map(url => fetch(url).then(character => character.json())));
      setPeopleList(movieChararray);
      setLoading(false);     
    }
    fetchPeople();
  },[]);
 
  return(
    <>
      {loading ? <h2>Loading....</h2> :(
        <div bg="primary" style={{ width: "12rem" }}><h1>{moviePeople.title}</h1>
          <div style={{ border: "5px solid black" }}>Character:
            {peopleList.sort((a, b) => {
                var A = a.name.toUpperCase();
                var B = b.name.toUpperCase();
                return (A < B )? -1 : (A > B) ? 1 : 0;
                }).map((people, index) => {
                  return <div key={index}>{people.name}</div>
                  })}
          </div>
        </div>
      )};
      <button variant="contained" style={{ color: "red", fontSize: "2rem"}}onClick={() => history.goBack()}>
        Back
      </button>
    </>
  );
};