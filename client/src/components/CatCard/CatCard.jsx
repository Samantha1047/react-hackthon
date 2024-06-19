import React from "react";
import "./CatCard.scss";

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <h2>{cat.name}</h2>
      <p>{cat.movie}</p>
    </div>
  );
};

export default CatCard;
