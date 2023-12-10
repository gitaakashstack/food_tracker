import useInput from "../../hooks/use-input";
import "./CheckoutForm.css";

const validCities = ["Mumbai", "Pune", "Gaya", "Madurai", "Chennai"];

const checkNameValidity = (value) => value.trim().length > 0;
const checkStreetValidity = (value) => value.trim().length > 0;
const checkPostalValidity = (value) => value.trim().match(/^\d{6}$/);
const checkCityValidity = (value) =>
  validCities.some((city) => city.toLowerCase() === value.toLowerCase());

function CheckoutForm(props) {
  const {
    inputValue: nameValue,
    inputTouch: nameTouch,
    setValue: setNameValue,
    inputBlurHandler: nameBlurHanlder,
    isInputInvalid: isNameInvalid,
    inputClass: nameClass,
    resetInput: resetNameInput,
    setTouchStatus: setNameTouch,
  } = useInput(checkNameValidity);

  const {
    inputValue: streetValue,
    inputTouch: streetTouch,
    setValue: setStreetValue,
    inputBlurHandler: streetBlurHanlder,
    isInputInvalid: isStreetInvalid,
    inputClass: streetClass,
    resetInput: resetStreetInput,
    setTouchStatus: setStreetTouch,
  } = useInput(checkStreetValidity);

  const {
    inputValue: postalValue,
    inputTouch: postalTouch,
    setValue: setPostalValue,
    inputBlurHandler: postalBlurHanlder,
    isInputInvalid: isPostalInvalid,
    inputClass: postalClass,
    resetInput: resetPostalInput,
    setTouchStatus: setPostalTouch,
  } = useInput(checkPostalValidity);

  const {
    inputValue: cityValue,
    inputTouch: cityTouch,
    setValue: setCityValue,
    inputBlurHandler: cityBlurHanlder,
    isInputInvalid: isCityInvalid,
    inputClass: cityClass,
    resetInput: resetCityInput,
    setTouchStatus: setCityTouch,
  } = useInput(checkCityValidity);

  const isFormValid =
    !isNameInvalid &&
    !isStreetInvalid &&
    !isPostalInvalid &&
    !isCityInvalid &&
    nameTouch &&
    streetTouch &&
    postalTouch &&
    cityTouch;

  function inputChangeHandler(event) {
    if (event.target.id === "name") setNameValue(event.target.value);

    if (event.target.id === "street") setStreetValue(event.target.value);

    if (event.target.id === "postal") setPostalValue(event.target.value);

    if (event.target.id === "city") setCityValue(event.target.value);
  }

  function checkoutSubmitHandler(event) {
    event.preventDefault();

    setNameTouch(true);
    setPostalTouch(true);
    setStreetTouch(true);
    setCityTouch(true);

    if (!isFormValid) return;

    console.log("form successfully submitted");
    resetNameInput();
    resetPostalInput();
    resetStreetInput();
    resetCityInput();
  }

  return (
    <form className={props.className} onSubmit={checkoutSubmitHandler}>
      <div
        className="checkout-input-elem-wrapper"
        onChange={inputChangeHandler}
      >
        <div className={nameClass}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onBlur={nameBlurHanlder}
            value={nameValue}
          ></input>
          {isNameInvalid ? <p>Please enter a valid name</p> : null}
        </div>
        <div className={streetClass}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onBlur={streetBlurHanlder}
            value={streetValue}
          ></input>
          {isStreetInvalid ? <p>Please enter a valid address</p> : null}
        </div>
        <div className={postalClass}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onBlur={postalBlurHanlder}
            value={postalValue}
          ></input>
          {isPostalInvalid ? <p>Please enter a valid postal code</p> : null}
        </div>
        <div className={cityClass}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onBlur={cityBlurHanlder}
            value={cityValue}
          ></input>
          {isCityInvalid ? <p>Please enter a valid city</p> : null}
        </div>
      </div>
      <div className="checkout-btns">
        <button
          className="checkout-cancel-btn"
          type="button"
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button className="checkout-confirm-btn" type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
