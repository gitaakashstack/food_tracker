import { Fragment, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <Fragment>
      <label htmlFor={props.inputAttr.id}>{props.label}</label>
      <input ref={ref} {...props.inputAttr} />
    </Fragment>
  );
});

export default Input;
