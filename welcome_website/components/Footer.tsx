import { params } from "@/utils/params";

const footerLinks = [
  {
    name: "Discord",
    url: params.DISCORD_SERVER_URL,
  },
  {
    name: "Forum",
    url: "https://discourse.dappnode.io/",
  },
  {
    name: "Documentation",
    url: "https://docs.dappnode.io/",
  },
];

export default function Footer() {
  return (
    <div className="h-full bg-gradient-to-t from-(--footer-background) flex justify-center items-center gap-8">
      {footerLinks.map((link) => (
        <a
          key={link.name}
          target="_blank noopener noreferrer"
          href={link.url}
          className="text-(--dappnode-primary) text-lg font-bold hover:underline"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
