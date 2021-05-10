import React from "react";
// Material UI
import { Step, StepLabel, Stepper, ThemeProvider } from "@material-ui/core";
import theme from "../styles/materialUi";
// Next js
import { ActionStep } from "../utils/types";
import { firstStep, lastStep } from "./CommonSteps";

export default function StepperConnection({
  steps,
  avahi = false,
}: {
  steps: ActionStep[];
  avahi?: boolean;
}) {
  steps = [firstStep, ...steps, lastStep({ avahi })];
  return (
    <ThemeProvider theme={theme}>
      <Stepper activeStep={-1} orientation="horizontal" alternativeLabel={true}>
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{step.title}</StepLabel>

            {step.component ? (
              <>
                <img src={step.image} />
                <step.component />
              </>
            ) : (
              <img src={step.image} />
            )}
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
}
