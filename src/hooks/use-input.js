import { useReducer } from "react";
import { useState } from "react/cjs/react.development";

const initialState = { value: "", touch: false };

function reducer(state, action) {
  if (action.type === "INPUT_CHANGE")
    return { ...state, value: action.payload };
  if (action.type === "INPUT_BLUR") return { ...state, touch: action.payload };
  if (action.type === "INPUT_RESET") return initialState;
  return initialState;
}

function useInput(checkInputValidity) {
  //const [inputValue, setInputValues] = useState("");
  //const [inputTouch, setInputTouch] = useState(false);
  const [inputState, dispatch] = useReducer(reducer, initialState);

  const isInputInvalid =
    !checkInputValidity(inputState.value) && inputState.touch;

  function inputBlurHandler() {
    dispatch({ type: "INPUT_BLUR", payload: true });
    //setInputTouch(true);
  }

  function resetInput() {
    dispatch({ type: "INPUT_RESET" });
    //setInputValues("");
    //setInputTouch(false);
  }

  function setTouchStatus(val) {
    dispatch({ type: "INPUT_BLUR", payload: val });
    //setInputTouch(val);
  }

  function setValue(val) {
    dispatch({ type: "INPUT_CHANGE", payload: val });
    //setInputValues(val);
  }

  const inputClass = isInputInvalid ? "invalid" : "";

  return {
    inputValue: inputState.value,
    inputTouch: inputState.touch,
    setValue,
    inputBlurHandler,
    isInputInvalid,
    inputClass,
    resetInput,
    setTouchStatus,
  };
}

export default useInput;
