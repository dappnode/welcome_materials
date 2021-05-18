import React from "react";
// Components
import StepperConnection from "../components/StepperConnection";
// Types
import { ActionStep } from "../utils/types";

export default function Avahi() {
  const steps: ActionStep[] = [
    {
      title: "Connect your device to the same network",
      image: "/avahi-connect.png",
    },
  ];
  return (
    <div className="connect-content">
      <h1>Local Network Discovery</h1>
      <p>Connect directly to your dappnode been in the same local network</p>
      <StepperConnection steps={steps} avahi={true} />
    </div>
  );
}
