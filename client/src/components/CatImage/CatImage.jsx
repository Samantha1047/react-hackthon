import React from "react";
import "./CatImage.scss";

const API_URL = "http://localhost:8080";

const CatImage = ({ cat, handleCatSelection, isSelected }) => {
  return (
    <div className={`cat-image ${isSelected ? "selected" : ""}`} onClick={() => handleCatSelection(cat)}>
      <img src={API_URL + cat.imageUrl} alt={cat.name} />
      {isSelected && <div className="check-mark">✔</div>}
    </div>
  );
};

export default CatImage;
