import "./CartSummary.css";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

function CartSummary(props) {
  const [doCheckout, setDoCheckout] = useState(false);
  console.log("cart summary rerender");
  //const [animate, setAnimation] = useState(false);

  /*useEffect(() => {
    if (!doCheckout) return;
    setAnimation(true);
    const timer = setTimeout(() => setAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [doCheckout]);*/

  function orderClickHandler() {
    setDoCheckout(true);
  }

  return (
    <div className="cart-summary">
      <div className="totamt">
        <p>Total Amount</p>
        <p>{props.totalCost}</p>
      </div>

      {doCheckout ? (
        <CheckoutForm className="checkout-animation" onClose={props.onClose} />
      ) : (
        <div className="close-order-btns">
          <button className="close-btn" type="button" onClick={props.onClose}>
            Close
          </button>
          {props.displayOrderButton ? (
            <button
              className="order-btn"
              type="button"
              onClick={orderClickHandler}
            >
              Order
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default CartSummary;
