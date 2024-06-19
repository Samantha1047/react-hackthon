import React from "react";
import "./CatImage.scss";

const CatImage = ({ cat, handleCatSelection, isSelected }) => {
  return (
    <div className={`cat-image ${isSelected ? "selected" : ""}`} onClick={() => handleCatSelection(cat)}>
      <img src={cat.imageUrl} alt={cat.name} />
      {isSelected && <div className="check-mark">✔</div>}
    </div>
  );
};

export default CatImage;
