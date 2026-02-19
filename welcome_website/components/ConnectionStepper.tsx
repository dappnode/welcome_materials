import React from "react";
import { cn } from "@/lib/utils";
import { ActionStep } from "../utils/types";
import { firstStep, lastStep } from "./CommonSteps";
import { params } from "../utils/params";

interface ConnectionStepperProps {
  steps: ActionStep[];
  avahi?: boolean;
}

export default function ConnectionStepper({
  steps,
  avahi = false,
}: ConnectionStepperProps) {
  const allSteps = [firstStep, ...steps, lastStep({ avahi })];

  return (
    <div className="w-full pt-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {allSteps.map((step, index) => (
          <div key={index} className="flex-1 w-full">
            {/* Step indicator with connector line */}
            <div className="flex items-center mb-4">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold shrink-0",
                  "bg-secondary text-secondary-foreground border-secondary",
                )}
              >
                {index + 1}
              </div>

              {/* Connector line */}
              {index < allSteps.length - 1 && (
                <div className="hidden md:block flex-1 h-0.5 mx-4 bg-border" />
              )}
            </div>

            {/* Step content */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">{step.title}</h3>

              {step.image && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={params.basePath + step.image}
                    alt={step.title}
                    className="max-w-full h-auto rounded-lg max-h-48 object-contain"
                  />
                </div>
              )}

              {step.component && (
                <div className="mt-4">
                  <step.component />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
