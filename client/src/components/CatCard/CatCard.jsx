import React from "react";
import "./CatCard.scss";

const API_URL = "http://localhost:8080";

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <h2>{cat.name}</h2>
      <p>The cat is from movie:</p>
      <p className="movie-title">{cat.movie}</p>
      <img src={API_URL + cat.posterPath} alt="movie-poster" />
    </div>
  );
};

export default CatCard;
