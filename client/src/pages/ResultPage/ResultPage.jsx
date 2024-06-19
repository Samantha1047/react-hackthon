import React, { useState } from "react";
import CatImage from "../../components/CatImage/CatImage";
import CatCard from "../../components/CatCard/CatCard";
import Header from "../../components/Header/Header";
import "./ResultPage.scss";

const ResultPage = ({ catData, selectedCat, handleRetry }) => {
  const [selectedDetailCat, setSelectedDetailCat] = useState(null);
  const isCorrect = selectedCat && !selectedCat.isGhibli;

  return (
    <div className="result-page">
      <Header title={isCorrect ? "Congratulations! You found the non-Ghibli cat!" : "Oops! Try again!"} />
      <div className="cats-grid">
        {catData.map((cat) => (
          <CatImage key={cat.id} cat={cat} handleCatSelection={setSelectedDetailCat} isSelected={selectedDetailCat?.id === cat.id} />
        ))}
      </div>
      {selectedDetailCat && <CatCard cat={selectedDetailCat} />}
      <button className="retry-button" onClick={handleRetry}>
        Retry the game!
      </button>
    </div>
  );
};

export default ResultPage;
