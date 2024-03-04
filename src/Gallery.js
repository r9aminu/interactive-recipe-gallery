import React, { useState } from 'react';
import { images } from './imageList'; // Importing images

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Set up state for index

  // Show next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) { 
      setCurrentIndex(currentIndex + 1); 
    }
  };

  // Show previous image
  const prevImage = () => {
    if (currentIndex > 0) { 
      setCurrentIndex(currentIndex - 1); 
    }
  };

  return (
    <div>
      <img src={images[currentIndex].url} alt="Recipe" /> {/* Display image */}
      <p>{images[currentIndex].description}</p> {/* Display description */}
      <button onClick={prevImage} disabled={currentIndex === 0}>Previous</button> {/* Prev button */}
      <button onClick={nextImage} disabled={currentIndex === images.length - 1}>Next</button> {/* Next button */}
    </div>
  );
};

export default Gallery; 