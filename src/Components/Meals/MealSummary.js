import "./MealSummary.css";
import Card from "../UI/Card";

function MealSummary() {
  console.log("meal summary");
  return (
    <Card className="summary">
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
}

export default MealSummary;
