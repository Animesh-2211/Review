import React, { useState, useEffect } from "react";
import ReviewHighlighter from "./components/ReviewHighlighter";
import './App.css'

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from reviews_data.json
    fetch("/reviews_data.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Hotel Reviews</h1>
      <ReviewHighlighter reviews={reviews} />
    </div>
  );
};

export default App;
