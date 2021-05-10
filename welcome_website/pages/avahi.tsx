import React from "react";
// Components
import StepperConnection from "../components/StepperConnection";
// Types
import { ActionStep } from "../utils/types";

export default function Avahi() {
  const steps: ActionStep[] = [
    {
      title: "Connect your device to the same network",
      image: { name: "/avahi-connect.png", width: 300, height: 150 },
    },
  ];
  return (
    <div className="connect-content">
      <h1>Avahi</h1>
      <p>
        Connect directly to your dappnode been in the same network by entering:
        http://my.dappnode.local
      </p>
      <StepperConnection steps={steps} avahi={true} />
    </div>
  );
}
