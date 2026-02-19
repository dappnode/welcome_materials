import React from "react";
// Icons
import { User, Lock } from "lucide-react";
// Components
import ConnectionStepper from "../components/ConnectionStepper";
// Params
import { params } from "../utils/params";
// Utils
import { ActionStep } from "../utils/types";

function WifiCredentials() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-2 text-lg">
        <User className="h-5 w-5 text-primary" />
        <span className="font-mono font-semibold">{params.SSID}</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-lg">
        <Lock className="h-5 w-5 text-primary" />
        <span className="font-mono font-semibold">{params.PASSWORD}</span>
      </div>
    </div>
  );
}

export default function Wifi() {
  const steps: ActionStep[] = [
    {
      title: "Connect to its Wi-Fi",
      image: "/wifi.png",
      component: WifiCredentials,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Wi-Fi Connection</h1>
        <p className="text-lg text-muted-foreground">
          Scan for Wi-Fi networks and connect to DAppNodeWifi using the default
          credentials
        </p>
      </div>
      <ConnectionStepper steps={steps} />
    </div>
  );
}
