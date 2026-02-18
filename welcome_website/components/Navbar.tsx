import React from "react";
import Link from "next/link";
import { params } from "../utils/params";

export default function Navbar() {
  return (
    <nav className="h-full bg-[#393e46] text-white text-center overflow-hidden z-[99]">
      <div className="absolute mt-[15px] ml-5">
        <img src={params.basePath + "/dappnode-logo.png"} alt="DAppNode Logo" />
      </div>
      <div>
        <div className="mt-5 flex justify-center">
          <h1 className="text-xl font-semibold">
            Connect to<span className="text-[#2fbcb2] ml-2">DAppNode</span>
          </h1>
        </div>
        <div className="flex justify-center gap-3 mt-2">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/wifi" className="text-white hover:underline">
            Wi-Fi
          </Link>
          <Link href="/local" className="text-white hover:underline">
            Local
          </Link>
          <Link href="/vpn" className="text-white hover:underline">
            Vpn
          </Link>
        </div>
      </div>
    </nav>
  );
}
