import { useContext } from "react";
import CartContext from "../../../Store/Cart-Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const data = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => { 
    data.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCard={addToCardHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
