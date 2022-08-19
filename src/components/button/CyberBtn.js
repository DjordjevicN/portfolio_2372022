import React from "react";
import "./cyberBtn.scss";

const CyberBtn = (props) => {
  return (
    <div className="buttons">
      <button className="cybr-btn">
        {props.title}
        <span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">
          {`${props.title}_`}
        </span>
        {/* <span aria-hidden className="cybr-btn__tag">
          R25
        </span> */}
      </button>
    </div>
  );
};

export default CyberBtn;
