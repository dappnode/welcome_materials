import React from "react";
// Components
import ConnectionStepper from "../components/ConnectionStepper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// Params
import { params } from "../utils/params";
// Icons
import { SiWireguard } from "react-icons/si";
import { SiOpenvpn } from "react-icons/si";
import { ExternalLink } from "lucide-react";
// Utils
import { ActionStep } from "../utils/types";

function OpenVpnClient() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SiOpenvpn className="h-6 w-6" />
          OpenVPN
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <a
          href={params.OPENVPN_DAPPNODE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Get Dappnode OpenVPN package
        </a>
        <a
          href={params.OPENVPN_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Download OpenVPN client
        </a>
      </CardContent>
    </Card>
  );
}

function WireguardClient() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SiWireguard className="h-6 w-6" />
          Wireguard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <a
          href={params.WIREGUARD_DAPPNODE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Get Dappnode Wireguard package
        </a>
        <a
          href={params.WIREGUARD_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:underline"
        >
          <ExternalLink className="h-4 w-4" />
          Download Wireguard client
        </a>
      </CardContent>
    </Card>
  );
}

function VpnClients() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choose Your VPN Client
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <WireguardClient />
        <OpenVpnClient />
      </div>
    </div>
  );
}

export default function Vpn() {
  const steps: ActionStep[] = [
    {
      title: "Choose your VPN client",
      image: "/select.png",
    },
    {
      title: "Get your VPN credentials",
      image: "/vpn-credentials.png",
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">VPN Connection</h1>
        <p className="text-lg text-muted-foreground">
          Connect to your Dappnode safely through VPN from anywhere in the world
        </p>
      </div>
      <ConnectionStepper steps={steps} />
      <VpnClients />
    </div>
  );
}
