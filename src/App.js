import Header from "./Components/Layout/Header";
import BackgroundImage from "./Components/Layout/BackgroundImage";
import MealSummary from "./Components/Meals/MealSummary";
import MealItems from "./Components/Meals/Meal Items/MealItems";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import MealProvider from "./store/MealProvider";

function App() {
  const [modalDisplay, setStateOfModalToggle] = useState(false);
  console.log("app rendering");
  function modalOpenHandler() {
    setStateOfModalToggle(true);
  }

  function modalCloseHandler() {
    setStateOfModalToggle(false);
  }

  return (
    <MealProvider>
      {modalDisplay ? <Cart onClose={modalCloseHandler} /> : null}
      <Header onOpen={modalOpenHandler} />
      <BackgroundImage />
      <main className="main-container">
        <MealSummary />
        <MealItems />
      </main>
    </MealProvider>
  );
}

export default App;
