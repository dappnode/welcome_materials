import React from "react";
// Components
import ConnectionStepper from "../components/ConnectionStepper";
// Types
import { ActionStep } from "../utils/types";

export default function Local() {
  const steps: ActionStep[] = [
    {
      title: "Connect your device to the same network",
      image: "/avahi-connect.png",
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Local Network Discovery</h1>
        <p className="text-lg text-muted-foreground">
          Connect directly to your Dappnode on the same local network
        </p>
      </div>
      <ConnectionStepper steps={steps} avahi={true} />
    </div>
  );
}
