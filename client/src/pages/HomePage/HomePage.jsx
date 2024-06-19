import React from "react";
import Header from "../../components/Header/Header";
import CatImage from "../../components/CatImage/CatImage";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.scss";

const API_URL = "http://localhost:8080";

const HomePage = ({ catData, handleCatSelection, handleSubmit, selectedCat }) => {
  return (
    <div className="home-page">
      <Header title="Guess which CAT is NOT from Studio Ghibli's Film?" />
      {
        <div className="cats-grid">
          {catData.map((cat) => (
            <CatImage key={cat.id} cat={cat} handleCatSelection={handleCatSelection} isSelected={selectedCat?.id === cat.id} />
          ))}
        </div>
      }
      <button className="submit-button" onClick={handleSubmit}>
        Find the result!
      </button>
    </div>
  );
};

export default HomePage;
