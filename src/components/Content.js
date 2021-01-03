import React from 'react';

import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';

function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="CONTENT" className="h-full rounded mb-20 shadow-2xl "/>

        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Mufins</h2>
          <p className="mb-2">Crispy, delicious, and nutitious</p>
          <span>R$16.00</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={ImageTwo} alt="CONTENT" className="h-full rounded mb-20 shadow-2xl "/>

        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Sallad</h2>
          <p className="mb-2">Crispy, delicious, and nutitious</p>
          <span>R$18.00</span>
        </div>
      </div>
    </>
  );
}

export default Content;