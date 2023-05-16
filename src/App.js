import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

const shownCartHandler = () => { 
  setCartIsShown(true);
};

const hideCartHandler = () => { 
  setCartIsShown(false);
}

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
