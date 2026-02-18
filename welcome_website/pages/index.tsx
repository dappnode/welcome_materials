import React from "react";
// Next js
import Link from "next/link";
// Shadcn UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { params } from "@/utils/params";

type ConnectionType = "Wi-Fi" | "Local" | "VPN";

const connectionMethods: Record<
  ConnectionType,
  { description: string; tutorialPath: string; warning?: string }
> = {
  "Wi-Fi": {
    description:
      "Connect from devices on your local network without additional setup",
    tutorialPath: "/wifi",
  },
  VPN: {
    description: "Securely access your Dappnode from anywhere in the world",
    tutorialPath: "/vpn",
  },
  Local: {
    description: "Direct connection using local IP address (fallback method)",
    tutorialPath: "/local",
    warning: "Fallback method",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Follow this guide to connect to your Dappnode and start managing your
          decentralized infrastructure
        </p>
      </div>

      {/* Step 1: First Time Setup */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-bold text-lg">
            1
          </div>
          <h2 className="text-2xl font-semibold">First Time Setup</h2>
        </div>

        <Link href="/wifi">
          <Card variant="clickable">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">
                    Connect via Wi-Fi
                  </CardTitle>
                  <CardDescription className="text-base">
                    Start here if this is your first time connecting to
                    Dappnode. You'll need to be on the same Wi-Fi network as
                    your device.
                  </CardDescription>
                </div>
                <div className="ml-4 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap">
                  Start Here
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>

      {/* Step 2: Choose Your Connection Method */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
            2
          </div>
          <h2 className="text-2xl font-semibold">
            Choose Your Connection Method
          </h2>
        </div>

        <p className="text-muted-foreground mb-6 ml-13">
          After your initial setup, select how you want to connect to your
          Dappnode
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(connectionMethods).map(([key, method]) => (
            <Link key={key} href={method.tutorialPath}>
              <Card variant="clickable" className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CardTitle className="text-center text-xl">{key}</CardTitle>
                    {method.warning && (
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-(--warning-bg) px-2 py-1 text-xs font-medium text-(--warning)">
                        <AlertTriangle className="h-3 w-3" />
                        {method.warning}
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-center">
                    {method.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12 p-6 rounded-lg bg-muted/50">
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className="text-sm text-muted-foreground">
          If you're having trouble connecting, check out our{" "}
          <a
            href="https://docs.dappnode.io/"
            className="text-primary hover:underline font-medium"
          >
            documentation
          </a>{" "}
          or join our{" "}
          <a
            href={params.DISCORD_SERVER_URL}
            className="text-primary hover:underline font-medium"
          >
            Discord community
          </a>{" "}
          for support.
        </p>
      </div>
    </div>
  );
}
