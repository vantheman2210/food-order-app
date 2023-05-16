import CartContext from "./Cart-Context";
const CartProvider = props => {
  return <CartContext.Provider>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;