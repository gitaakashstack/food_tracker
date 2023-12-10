import { createContext } from "react";

const mealContext = createContext({
  orderedMeals: [],
  totalCost: 0,
  addMealHandler: () => {},
  removeMealHandler: () => {},
});

export default mealContext;
