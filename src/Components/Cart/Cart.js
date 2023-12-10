import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./Cart.css";
import { useContext } from "react";
import mealContext from "../../store/mealsContext";

/*const DUMMY_CART = [
  {
    id: "1",
    name: "Babycorn Chilli",
    price: 22.99,
    amount: 1,
  },
  {
    id: 2,
    name: "Chicken 65",
    price: 16.5,
    amount: 3,
  },
];*/

function Cart(props) {
  const { orderedMeals, totalCost } = useContext(mealContext);
  console.log("cart rendering");
  const itemsInCart = orderedMeals.map((item) => {
    return <CartItem key={item.id} order={item}></CartItem>;
  });

  const displayOrderButton = orderedMeals.length > 0;

  return (
    <Modal className="order-list">
      <ul>{itemsInCart}</ul>
      <CartSummary
        totalCost={totalCost.toFixed(2)}
        onClose={props.onClose}
        displayOrderButton={displayOrderButton}
      />
    </Modal>
  );
}

export default Cart;
