import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-Context";

const Cart = (props) => {
  const dataCtx = useContext(CartContext);

  const totalAmount = `$${dataCtx.totalAmount.toFixed(2)}`;
  const hasItems = dataCtx.items.length > 0;

  

  
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {dataCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
