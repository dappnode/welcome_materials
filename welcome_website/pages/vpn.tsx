import React from "react";
// Components
import StepperConnection from "../components/StepperConnection";
// Params
import { params } from "../utils/params";
// Icons
import { SiWireguard } from "react-icons/si";
import { SiOpenvpn } from "react-icons/si";
// Utils
import { ActionStep } from "../utils/types";

function OpenVpnClient() {
  return (
    <div>
      <h2>
        Open-VPN <SiOpenvpn />
      </h2>
      <div>
        <a href={params.OPENVPN_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
      </div>
      <div>
        <a href={params.OPENVPN_DOWNLOAD_URL}>Download Wireguard desktop</a>
      </div>
    </div>
  );
}

function WireguardClient() {
  return (
    <div>
      <h2>
        Wireguard <SiWireguard />
      </h2>
      <div>
        <a href={params.WIREGUARD_DAPPNODE_URL}>Get DAppNode Wireguard package</a>
      </div>
      <div>
        <a href={params.WIREGUARD_DOWNLOAD_URL}>Download Wireguard desktop</a>
      </div>
    </div>
  );
}

function VpnClients() {
  return (
    <>
      <h1>Choose your VPN client</h1>
      <div>
        <WireguardClient />
        <OpenVpnClient />
      </div>
    </>
  );
}

export default function Vpn() {
  const steps: ActionStep[] = [
    {
      title: "Get your VPN credentials",
      image: { name: "/credentials-icon.png", width: 100, height: 100 },
    },
  ];
  return (
    <div className="connect-content">
      <p>Connect to your DAppNode through VPN from anywhere.</p>

      <VpnClients />

      <StepperConnection steps={steps} />
    </div>
  );
}
