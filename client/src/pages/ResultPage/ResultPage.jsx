import React, { useState } from "react";
import CatImage from "../../components/CatImage/CatImage";
import CatCard from "../../components/CatCard/CatCard";
import Header from "../../components/Header/Header";
import "./ResultPage.scss";

const ResultPage = ({ selectedCat, handleRetry }) => {
  const [selectedDetailCat, setSelectedDetailCat] = useState(null);
  const cats = [
    // Same array of cat objects as in HomePage
    { id: 1, name: "Catbus", imageUrl: "path/to/catbus.jpg", isGhibli: true, movie: "My Neighbor Totoro" },
    { id: 2, name: "Jiji", imageUrl: "path/to/jiji.jpg", isGhibli: true, movie: "Kiki's Delivery Service" },
    { id: 3, name: "Moon", imageUrl: "path/to/moon.jpg", isGhibli: true, movie: "Whisper of the Heart" },
    { id: 4, name: "The Baron", imageUrl: "path/to/the-baron.jpg", isGhibli: true, movie: "The Cat Returns" },
    { id: 5, name: "Renaldo Moon", imageUrl: "path/to/renaldo-moon.jpg", isGhibli: true, movie: "The Cat Returns" },
    { id: 6, name: "Mut", imageUrl: "path/to/mut.jpg", isGhibli: true, movie: "The Cat Returns" },
    { id: 7, name: "Yuki", imageUrl: "path/to/yuki.jpg", isGhibli: true, movie: "The Cat Returns" },
    { id: 8, name: "Natori", imageUrl: "path/to/natori.jpg", isGhibli: true, movie: "The Cat Returns" },
    { id: 9, name: "Non-Ghibli Cat", imageUrl: "path/to/non-ghibli-cat.jpg", isGhibli: false, movie: "Some Other Movie" },
  ];

  const isCorrect = selectedCat && !selectedCat.isGhibli;

  return (
    <div className="result-page">
      <Header title={isCorrect ? "Congratulations! You found the non-Ghibli cat!" : "Oops! Try again!"} />
      <div className="cats-grid">
        {cats.map((cat) => (
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
