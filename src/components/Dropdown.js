import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ isOpen, toggle }) {
  return (
    <div className={isOpen 
      ? 'grid grid-rows-4 text-center items-center bg-yellow-500' 
      : 'hidden'}
      onClick={toggle}
    >

      <Link className="p-4 hover:text-white" to="/">Home</Link>
      <Link className="p-4 hover:text-white" to="/menu">Menu</Link>
      <Link className="p-4 hover:text-white" to="/about">About</Link>
    </div>
  );
}

export default Dropdown;