import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='title'>
          <h2>Shopping</h2>
        </div>
      </div>
      <div className='toggler' onClick={toggleMenu}>
        <span>☰</span>
      </div>
      <div className={`center ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className={`search ${isOpen ? 'open' : ''}`}>
        <input type="text" placeholder='Search...' />
      </div>
      <div className={`right ${isOpen ? 'open' : ''}`}>
        <div className="signin">
          <button>Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
        <div className="cart">
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
