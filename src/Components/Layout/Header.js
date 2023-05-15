import React from "react";
import classes from "./Header.module.css";
import mealsIMG from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meal-Order</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsIMG} alt="A table full of food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
