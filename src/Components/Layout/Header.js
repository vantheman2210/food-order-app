import React from "react";
import './Header.module.css';
import mealsIMG from '../../Assets/meals.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>Meal-Order</h1>
        <button>Cart</button>
      </header>
      <div>
    <img></img>
      </div>
    </React.Fragment>
  )
};

export default Header;
