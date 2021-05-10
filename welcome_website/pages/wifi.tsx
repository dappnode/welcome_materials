import React from "react";
// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
// Components
import StepperConnection from "../components/StepperConnection";
// Params
import { params } from "../utils/params";
// Utils
import { ActionStep } from "../utils/types";

function WifiCredentials() {
  return (
    <div>
      <p>
        <AccountCircleIcon /> {params.SSID}
      </p>
      <p>
        <LockOpenIcon /> {params.PASSWORD}
      </p>
    </div>
  );
}

export default function Wifi() {
  const steps: ActionStep[] = [
    {
      title: "Connect to its Wi-Fi",
      image: { name: "/wifi-icon.png", width: 100, height: 100 },
      component: WifiCredentials,
    },
  ];
  return (
    <div className="connect-content">
      <h1>Wi-Fi</h1>
      <p>
        Scan for Wi-Fi networks and connect to DAppNodeWifi. Credentials: DAppNodeWifi, dappnode
      </p>
      <StepperConnection steps={steps} />
    </div>
  );
}
