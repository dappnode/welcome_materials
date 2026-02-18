import React from "react";

export default function Footer() {
  return (
    <div className="h-full bg-[#393e46] flex justify-center items-center gap-8">
      <a
        href="https://discord.gg/c28an8dA5k"
        className="text-[#2fbcb2] text-lg font-bold hover:underline"
      >
        Discord
      </a>
      <a
        href="https://discourse.dappnode.io/"
        className="text-[#2fbcb2] text-lg font-bold hover:underline"
      >
        Forum
      </a>
      <a
        href="https://docs.dappnode.io/"
        className="text-[#2fbcb2] text-lg font-bold hover:underline"
      >
        Documentation
      </a>
    </div>
  );
}
