import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {
  const [classActive, setClassActive] = useState(false);

  const data = useContext(CartContext);

  const numberOfCartItems = data.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classActive ? classes.bump : ""}`;

  useEffect(() => {
    if (data.items.length === 0) {
      return;
    }

    setClassActive(true);

    const timer = setTimeout(() => {
      setClassActive(false);
    }, 300);

    return () => { 
      clearTimeout(timer);
    }
  }, [data.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
