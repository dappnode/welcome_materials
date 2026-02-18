export const params = {
  // VPn
  // 1. OpenVpn
  OPENVPN_DOWNLOAD_URL: "https://openvpn.net/download-open-vpn/",
  OPENVPN_DAPPNODE_URL: "http://my.dappnode/installer/dnp/vpn.dnp.dappnode.eth",
  // 2. Wireguard
  WIREGUARD_DOWNLOAD_URL: "https://www.wireguard.com/install/",
  WIREGUARD_DAPPNODE_URL:
    "http://my.dappnode/installer/dnp/wireguard.dnp.dappnode.eth",
  // 2. Tailscale
  TAILSCALE_DOWNLOAD_URL: "https://tailscale.com/download/",
  TAILSCALE_DAPPNODE_URL:
    "http://my.dappnode/installer/dnp/tailscale.dnp.dappnode.eth",

  DAPPMANAGER_VPN_TAB_URL: "http://my.dappnode/vpn/tailscale",
  // Endpoints
  DAPPNODE_ENDPOINT: "http://my.dappnode",
  DAPPNODE_AVAHI_ENDPOINT: "http://my.dappnode.local",
  // Wi-Fi
  SSID: "DAppNodeWifi",
  PASSWORD: "dappnode",
  // Path static images
  basePath: process.env.NODE_ENV === "production" ? "/welcome_materials" : "",
  DISCORD_SERVER_URL: "https://discord.com/invite/dappnode",
};
