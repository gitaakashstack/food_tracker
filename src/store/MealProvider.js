import { useCallback, useReducer } from "react";
import mealContext from "./mealsContext";

function mealReducer(state, action) {
  const { type, currentMealID, currentMealData } = action;
  if (type === "ADD_MEAL") {
    const prevMeals = [...state.orderedMeals];
    const mealOrdered = prevMeals.find((meal) => meal.id === currentMealID);

    if (mealOrdered) mealOrdered.amount += currentMealData.amount;
    else prevMeals.push(currentMealData);

    return {
      orderedMeals: prevMeals,
      totalCost:
        state.totalCost + currentMealData.price * currentMealData.amount,
    };
  }

  if (type === "REMOVE_MEAL") {
    const prevMeals = [...state.orderedMeals];
    const mealToBeRemovedIdx = prevMeals.findIndex(
      (meal) => meal.id === currentMealID
    );

    const mealToBeRemoved = prevMeals[mealToBeRemovedIdx];
    if (mealToBeRemoved.amount > 1) mealToBeRemoved.amount -= 1;
    else prevMeals.splice(mealToBeRemovedIdx, 1);

    return {
      orderedMeals: prevMeals,
      totalCost: state.totalCost - mealToBeRemoved.price * 1,
    };
  }
}

function MealProvider(props) {
  const [orderedMealsData, dispatchMealAction] = useReducer(mealReducer, {
    orderedMeals: [],
    totalCost: 0,
  });

  console.log("meal provider rerender");

  const addMealHandler = useCallback(function (mealData) {
    dispatchMealAction({
      type: "ADD_MEAL",
      currentMealID: mealData.id,
      currentMealData: mealData,
    });
  }, []);

  const removeMealHandler = useCallback(function (mealID) {
    dispatchMealAction({
      type: "REMOVE_MEAL",
      currentMealID: mealID,
      currentMealData: [],
    });
  }, []);

  return (
    <mealContext.Provider
      value={{ ...orderedMealsData, addMealHandler, removeMealHandler }}
    >
      {props.children}
    </mealContext.Provider>
  );
}

export default MealProvider;
