import React from "react";
import "./styles.scss";

const Step = ({ step, currentStep, handleClick, isDisabled }) => {
  return (
    <>
      <div
        onClick={(e) => {
          handleClick(e.target.innerText);
        }}
        disabled={isDisabled(step, currentStep)}
        className={currentStep > step ? "step-touched" : "step"}
      >
        {step}
      </div>
      <div className={currentStep - 1 > step ? "line-touched" : "line"}></div>
    </>
  );
};
export default Step;
