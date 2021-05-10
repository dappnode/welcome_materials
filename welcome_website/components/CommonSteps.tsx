import { ActionStep } from "../utils/types";
import Link from "next/link";
import { params } from "../utils/params";

export const firstStep: ActionStep = {
  title: "Plug DAppNode to the router",
  image: { name: "/connect-to-router.png", width: 200, height: 100 },
};
export const lastStep = ({ avahi = false }: { avahi: boolean }): ActionStep => {
  return {
    title: "You're all set!",
    image: { name: "/ready-icon.png", width: 90, height: 90 },
    component: () => LastStepComponent({ avahi }),
  };
};

function LastStepComponent({ avahi = false }: { avahi: boolean }) {
  const endpoint = avahi ? params.DAPPNODE_AVAHI_ENDPOINT : params.DAPPNODE_ENDPOINT;
  return (
    <div style={{ marginLeft: 10 }}>
      <Link href={endpoint}>
        <a>{endpoint}</a>
      </Link>
    </div>
  );
}
