import React from "react";
// Components
import ConnectionStepper from "../components/ConnectionStepper";
// Icons
import { AlertTriangle } from "lucide-react";
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

      {/* Warning Section */}
      <div className="mb-8 p-5 rounded-lg border-2 border-(--warning-border) bg-(--warning-bg)">
        <div className="flex gap-3">
          <AlertTriangle className="h-5 w-5 text-(--warning) shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-(--warning-foreground) mb-2 flex items-center gap-2">
              Fallback Method Only
            </h3>
            <p className="text-sm text-(--warning-foreground) leading-relaxed">
              This connection method should only be used as a{" "}
              <strong>last resort</strong> when Wi-Fi and VPN connections are
              not available. Please note that this method provides access to the
              <strong> Dappmanager UI only</strong>. Other Dappnode packages,
              services, and interfaces may not be reachable using local network
              discovery.
            </p>
          </div>
        </div>
      </div>

      <ConnectionStepper steps={steps} avahi={true} />
    </div>
  );
}
