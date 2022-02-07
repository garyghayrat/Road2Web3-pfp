import React, { Fragment } from "react";

import Backdrop from "./Backdrop";
import classes from "./MintModal.module.css";

const MintModal = (props) => {
  console.log("inside modal");

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        <br></br>
        <div
          style={{
            fontSize: "32px",
          }}
        >
          Success
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <button className={classes.ButtonGrey} onClick={props.closeModal}>
            CONTINUE
          </button>
        </div>
        <br></br>
      </div>
    </Fragment>
  );
};

export default MintModal;
