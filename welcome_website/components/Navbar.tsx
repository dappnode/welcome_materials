import React from "react";
import Link from "next/link";
import { params } from "../utils/params";

export default function Navbar() {
  return (
    <nav className="h-full bg-gradient-to-b from-(--navbar-background) text-center overflow-hidden z-99">
      <div className="absolute mt-4 ml-5">
        <img
          className="w-14 h-14"
          src={params.basePath + "/dappnode-logo.png"}
          alt="Dappnode Logo"
        />
      </div>
      <div>
        <div className="mt-5 flex justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-(--dappnode-primary)">Dappnode</span>!
          </h1>
        </div>
        <div className="flex justify-center gap-3 mt-2">
          <Link href="/" className="text-(--link-color) hover:underline">
            Home
          </Link>
          <Link href="/wifi" className="text-(--link-color) hover:underline">
            Wi-Fi
          </Link>
          <Link href="/local" className="text-(--link-color) hover:underline">
            Local
          </Link>
          <Link href="/vpn" className="text-(--link-color) hover:underline">
            Vpn
          </Link>
        </div>
      </div>
    </nav>
  );
}
