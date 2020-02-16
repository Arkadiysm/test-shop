import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/shopping-cart.svg';
import '../index.css';

const Header = (props) => {
  const {handleCartClick} = props;
  return (
    <div className="header">
      <div className="logo">
      <Link to="/"><span className="main-logo">Наш уютный магазин</span></Link>
      </div>
      <div className="cart-ico">
        <div onClick={handleCartClick} className="link-to-cart">
          <img src={mainLogo} alt="logo" />
          <span>корзина</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
