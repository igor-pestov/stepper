import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Step from "../Step/";
import "./styles.scss";

function Stepper({ countSteps }) {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = Array.from({ length: countSteps }, (_, i) => i + 1);

  const isDisabled = (step, currentStep) => {
    if (step == 1 && currentStep == 2) return true
    if (step == 5 && currentStep > 5) return true
  };

  const handleClick = (val) => {
    if (currentStep == val) {
      increase();
    } else if (currentStep > val) {
      decrease();
    }
  };

  const increase = () => {
    setCurrentStep(currentStep + 1);
  };

  const decrease = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="stepper">
        {steps.map((step) => (
          <Step
            key={uuidv4()}
            currentStep={currentStep}
            step={step}
            handleClick={handleClick}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    </>
  );
}

export default Stepper;
