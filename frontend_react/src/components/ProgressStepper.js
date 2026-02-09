import React from "react";

/**
 * Progress stepper for multi-step onboarding flows.
 * Uses simple text items: "<number> <label>" and highlights active step.
 */
export default function ProgressStepper({ currentStep, steps }) {
  return (
    <nav className="onb-stepper" aria-label="Onboarding progress">
      {steps.map((label, idx) => {
        const stepNumber = idx + 1;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={label}
            className={`onb-step ${isActive ? "onb-step--active" : ""}`}
            aria-current={isActive ? "step" : undefined}
          >
            <strong>{stepNumber}</strong>
            <span className="onb-stepLabel">{label}</span>
          </div>
        );
      })}
    </nav>
  );
}
