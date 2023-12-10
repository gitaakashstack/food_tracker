import mealsImage from "../../assets/meals.jpg";
import "./BackgroundImage.css";

function BackgroundImage() {
  console.log("bg rendering");
  return (
    <div className="bg-image">
      <img src={mealsImage} alt="Lots of delicacies"></img>
    </div>
  );
}

export default BackgroundImage;
