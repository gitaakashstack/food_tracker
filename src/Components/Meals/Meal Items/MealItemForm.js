import "./MealItemForm.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

function MealItemForm(props) {
  const inputRef = useRef();
  const [isValidAmount, setStateOfAmountValidity] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    const mealAmount = parseInt(inputRef.current.value);

    if (mealAmount <= 0 || mealAmount > 5) {
      setStateOfAmountValidity(false);
      return;
    }

    props.onAddMeal(mealAmount);
  }

  return (
    <form className="mealitem-form" onSubmit={submitHandler}>
      <div className="mealitem-amount">
        <Input
          label="Amount"
          ref={inputRef}
          inputAttr={{
            id: "meal-qty",
            type: "number",
            min: "0",
            max: "5",
            step: "1",
            defaultValue: "0",
          }}
        />
      </div>
      <div className="mealitem-addbutton-div">
        <button className="mealitem-addbutton" type="submit">
          + Add
        </button>
      </div>
    </form>
  );
}

export default MealItemForm;
