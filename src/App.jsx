import React, { useState, useEffect } from 'react';
import fetchRandomAnimal from './fetchRandomAnimal'; // Import the fetch function
import './App.css'; // Import CSS file for styling

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);

  // Function to fetch a random cat image
  const fetchRandomCatImage = () => {
    const apiKey = 'live_DSNwfenrjiSWo4G1jV7PRgody3J1hA1uD7zc0EdPZQynLBHdAQVkMurggHVqKk2w'; // Replace with your actual API key
    fetchRandomAnimal(apiKey, 'cat') // Fetch a random cat image
      .then(imageUrl => setImageUrl(imageUrl))
      .catch(error => console.error('Error fetching random cat image:', error));
  };

  // Load initial cat image on component mount
  useEffect(() => {
    fetchRandomCatImage();
  }, []);

  // Function to handle button click to fetch the next cat image
  const handleNextImage = () => {
    fetchRandomCatImage();
  };

  return (
    <div className="container">
      <h1>Veni Vici!</h1>
      <button onClick={handleNextImage} className="next-button">Next Cat Image</button>
      {imageUrl && <img src={imageUrl} alt="Random Cat" className="cat-image" />}
    </div>
  );
};

export default App;
