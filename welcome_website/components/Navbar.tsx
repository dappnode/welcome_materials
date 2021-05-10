import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <Image src={"/dappnode.png"} width={75} height={75} />
      </div>
      <div className="navbar-title-links">
        <div className="navbar-title">
          <h1>Connect to </h1>
          <h1 className="navbar-title-dappnode">DAppNode</h1>
        </div>
        <div className="navbar-links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/wifi">
            <a>Wi-Fi</a>
          </Link>
          <Link href="/avahi">
            <a>Avahi</a>
          </Link>
          <Link href="/vpn">
            <a>Vpn</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
