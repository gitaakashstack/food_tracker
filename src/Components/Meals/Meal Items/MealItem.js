import MealItemForm from "./MealItemForm";
import "./MealItem.css";
import mealContext from "../../../store/mealsContext";
import { useContext } from "react";

function MealItem(props) {
  const { meal } = props;

  const { addMealHandler } = useContext(mealContext);
  console.log("meal item render using contesxt");
  function addMealHandler_1(mealAmount) {
    addMealHandler({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: mealAmount,
    });
  }

  return (
    <li className="meal-item">
      <div>
        <h3 className="meal-title">{meal.name}</h3>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">{meal.price}</p>
      </div>
      <MealItemForm onAddMeal={addMealHandler_1} />
    </li>
  );
}

export default MealItem;
