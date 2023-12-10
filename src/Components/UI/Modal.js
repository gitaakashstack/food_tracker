import { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal(props) {
  const ModalOverlay = (
    <div className="modal">
      <div className={`modal-content ${props.className}`}>{props.children}</div>
    </div>
  );
  return <Fragment>{createPortal(ModalOverlay, document.body)}</Fragment>;
}

export default Modal;
