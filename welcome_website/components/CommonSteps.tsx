import { ActionStep } from "../utils/types";
import Link from "next/link";
import { params } from "../utils/params";

export const firstStep: ActionStep = {
  title: "Plug DAppNode to the router",
  image: "/connect-to-router.png",
};
export const lastStep = ({ avahi = false }: { avahi: boolean }): ActionStep => {
  return {
    title: "You're all set!",
    image: "/ready.png",
    component: () => LastStepComponent({ avahi }),
  };
};

function LastStepComponent({ avahi = false }: { avahi: boolean }) {
  const endpoint = avahi ? params.DAPPNODE_AVAHI_ENDPOINT : params.DAPPNODE_ENDPOINT;
  return (
    <Link href={endpoint}>
      <a>{endpoint}</a>
    </Link>
  );
}
