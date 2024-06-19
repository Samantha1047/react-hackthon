import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";

const App = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCatSelection = (cat) => {
    setSelectedCat(cat);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedCat(null);
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      {isSubmitted ? (
        <ResultPage selectedCat={selectedCat} handleRetry={handleRetry} />
      ) : (
        <HomePage handleCatSelection={handleCatSelection} handleSubmit={handleSubmit} selectedCat={selectedCat} />
      )}
    </div>
  );
};

export default App;
