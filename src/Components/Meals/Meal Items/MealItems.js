import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import MealItem from "./MealItem";
import "./MealItems.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MealItems(props) {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://practice-http-request-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        const modifiedResponseData = [];
        for (const id in responseData) {
          modifiedResponseData.push({ id: id, ...responseData[id] });
        }
        console.log(modifiedResponseData);
        setMealsData(modifiedResponseData);
        setIsLoading(false);
      });
  }, []);

  const mealsList = mealsData.map((meal) => {
    return <MealItem meal={meal} key={meal.id}></MealItem>;
  });
  return (
    <Card className="meal-items-container">
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <ul>{mealsList}</ul>
      )}
    </Card>
  );
}

export default MealItems;
