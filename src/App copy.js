import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageFiles = require.context('./carrossel', true, /\.(png|jpe?g|svg)$/);
    const imagePaths = imageFiles.keys();
    const images = imagePaths.map((path) => imageFiles(path));
    setImages(images);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="App">
      <img src={images[index]} alt={`imagem ${index}`} />
    </div>
  );
}

export default App;

