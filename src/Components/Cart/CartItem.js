import { useContext } from "react";
import mealContext from "../../store/mealsContext";
import "./CartItem.css";

function CartItem(props) {
  const { order } = props;

  const { addMealHandler, removeMealHandler } = useContext(mealContext);
  console.log("cart item rendering");
  function buttonClickHandler(event) {
    if (event.target.className.match(/^add-btn$/))
      addMealHandler({
        id: order.id,
        name: order.name,
        price: order.price,
        amount: 1,
      });

    if (event.target.className.match(/^sub-btn$/)) removeMealHandler(order.id);
  }
  return (
    <li className="order">
      <div className="order-detail">
        <h3 className="order-title">{order.name}</h3>
        <div className="order-price-amount">
          <p className="order-price">{order.price}</p>
          <div className="order-amount">{`x ${order.amount}`}</div>
        </div>
      </div>
      <div className="order-add-sub" onClick={buttonClickHandler}>
        <div className="add-btn">+</div>
        <div className="sub-btn">-</div>
      </div>
    </li>
  );
}

export default CartItem;
