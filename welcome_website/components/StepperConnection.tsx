import React from "react";
// Material UI
import { Step, StepLabel, Stepper, ThemeProvider } from "@material-ui/core";
import theme from "../styles/materialUi";
// Next js
import Image from "next/image";
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
      <Stepper
        style={{ backgroundColor: "#eee", marginTop: 20, color: "#393e46" }}
        activeStep={-1}
        orientation="horizontal"
        alternativeLabel={true}
      >
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel style={{ marginBottom: 15 }}>{step.title}</StepLabel>

            {step.component ? (
              <>
                <Image src={step.image.name} width={step.image.width} height={step.image.height} />
                <step.component />
              </>
            ) : (
              <Image src={step.image.name} width={step.image.width} height={step.image.height} />
            )}
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
}
