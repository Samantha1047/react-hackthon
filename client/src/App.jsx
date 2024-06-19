import HomePage from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

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

  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    try {
      const response = await axios.get(`${API_URL}/cats`);
      console.log("here: ", response.data);
      setCats(response.data);
    } catch (err) {
      console.log("the error is: ", err);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="App">
      {isSubmitted ? (
        <ResultPage catData={cats} selectedCat={selectedCat} handleRetry={handleRetry} />
      ) : (
        <HomePage catData={cats} handleCatSelection={handleCatSelection} handleSubmit={handleSubmit} selectedCat={selectedCat} />
      )}
    </div>
  );
};

export default App;
