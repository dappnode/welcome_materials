import React from "react";
import Link from "next/link";
import { params } from "../utils/params";

const navLinks = [
  { name: "Wi-Fi", href: "/wifi" },
  { name: "VPN", href: "/vpn" },
  { name: "Local", href: "/local" },
];

export default function Navbar() {
  return (
    <nav className="h-full border-b bg-muted/30 backdrop-blur ">
      <div className="h-full flex flex-col items-center justify-evenly px-6 max-w-7xl mx-auto gap-2 mt-3">
        {/* Logo and Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            className="w-12 h-12"
            src={params.basePath + "/dappnode-logo.png"}
            alt="Dappnode Logo"
          />
          <div className="flex flex-col">
            <span className="font-bold text-3xl leading-none text-(--dappnode-purple)">
              Dappnode
            </span>
            <span className="text-sm text-muted-foreground">Setup Guide</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-(--dappnode-purple) transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--dappnode-purple) group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
