import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.modal}></dialog>
    </>
  );
};

export default Modal;
