// components/HeroSection.js

import React from 'react';

const Fotsy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHL5iz_JpZbosk7pca9rpTNAtNb6h73t-KRw&usqp=CAU"
        alt="Foxy"
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-lg text-center">FOXY FNAF2 </p>
    </div>
  );
};

export default Fotsy;
