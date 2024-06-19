import React from "react";
import Header from "../../components/Header/Header";
import CatImage from "../../components/CatImage/CatImage";
import "./HomePage.scss";

const HomePage = ({ handleCatSelection, handleSubmit, selectedCat }) => {
  const cats = [
    // Array of cat objects with id, name, image URL, and a flag for Studio Ghibli
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

  return (
    <div className="home-page">
      <Header title="Guess which CAT is NOT from Studio Ghibli's Film?" />
      <div className="cats-grid">
        {cats.map((cat) => (
          <CatImage key={cat.id} cat={cat} handleCatSelection={handleCatSelection} isSelected={selectedCat?.id === cat.id} />
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Find the result!
      </button>
    </div>
  );
};

export default HomePage;
