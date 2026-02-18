import React from "react";
// Next
import Image from "next/image";
// Components
import ConnectionStepper from "../components/ConnectionStepper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// Params
import { params } from "../utils/params";
// Icons
import { SiWireguard } from "react-icons/si";
import { SiOpenvpn } from "react-icons/si";
import { ExternalLink, Settings } from "lucide-react";
// Utils
import { ActionStep } from "../utils/types";

// Custom Tailscale Icon Component
const TailscaleIcon = ({ className }: { className?: string }) => (
  <Image
    src="/tailscale-logo.svg"
    alt="Tailscale"
    width={24}
    height={24}
    className={className}
  />
);

const clientOptions: {
  name: string;
  url: string;
  dappnodeUrl: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    name: "OpenVPN",
    url: params.OPENVPN_DOWNLOAD_URL,
    dappnodeUrl: params.OPENVPN_DAPPNODE_URL,
    Icon: SiOpenvpn,
  },
  {
    name: "Wireguard",
    url: params.WIREGUARD_DOWNLOAD_URL,
    dappnodeUrl: params.WIREGUARD_DAPPNODE_URL,
    Icon: SiWireguard,
  },
  {
    name: "Tailscale",
    url: params.TAILSCALE_DOWNLOAD_URL,
    dappnodeUrl: params.TAILSCALE_DAPPNODE_URL,
    Icon: TailscaleIcon,
  },
];

function VpnClients() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choose Your VPN Client
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xlxl mx-auto">
        {clientOptions.map((client) => (
          <Card key={client.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <client.Icon className="h-6 w-6" />
                {client.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href={client.dappnodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Get Dappnode {client.name} package
              </a>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Download {client.name} client
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SetUpClients() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold py-3 mb-3 text-center">
        Set Up Your VPN
      </h2>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Complete Configuration in Dappnode
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            To complete your VPN setup, navigate to the Dappnode UI and access
            the VPN tab. Select your chosen VPN client and follow the
            configuration steps provided there to establish your secure
            connection.
          </p>
          <a
            href={params.DAPPMANAGER_VPN_TAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Open VPN Settings in Dappnode
          </a>
        </CardContent>
      </Card>
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
      title: "Set Up your VPN",
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
      <SetUpClients />
    </div>
  );
}
