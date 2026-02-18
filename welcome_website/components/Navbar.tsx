import React from "react";
import Link from "next/link";
import { params } from "../utils/params";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <img src={params.basePath + "/dappnode-logo.png"} />
      </div>
      <div className="navbar-title-links">
        <div className="navbar-title">
          <h1>
            Connect to<span className="navbar-title-dappnode">DAppNode</span>
          </h1>
        </div>
        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/wifi">Wi-Fi</Link>
          <Link href="/local">Local</Link>
          <Link href="/vpn">Vpn</Link>
        </div>
      </div>
    </nav>
  );
}
