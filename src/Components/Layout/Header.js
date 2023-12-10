import "./Header.css";
import mealContext from "../../store/mealsContext";
import { useContext, useEffect, useState } from "react";

function Header(props) {
  const { orderedMeals } = useContext(mealContext);
  const totalMealsCount = orderedMeals.reduce(
    (accm, meal) => accm + meal.amount,
    0
  );
  const [applyAnimation, setStateOfAnimation] = useState(false);
  useEffect(() => {
    if (totalMealsCount <= 0) return;

    setStateOfAnimation(true);
    const timer = setTimeout(() => setStateOfAnimation(false), 300);

    return () => clearTimeout(timer);
  }, [totalMealsCount]);

  console.log("header rendering");
  return (
    <header
      className={`prim-header ${applyAnimation ? "header-animation" : ""}`}
    >
      <div>ReactMeals</div>
      <button onClick={props.onOpen}>
        <span className="cart-symbol"></span>
        <span className="cart-text"> Your Cart</span>
        <span className="cart-num">{totalMealsCount}</span>
      </button>
    </header>
  );
}

export default Header;
