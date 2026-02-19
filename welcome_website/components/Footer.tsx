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
    <footer className="h-full border-t bg-muted/30">
      <div className="h-full flex items-center justify-center gap-8 px-6">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
            className="text-sm font-medium text-foreground/70 hover:text-(--dappnode-purple) transition-colors inline-flex items-center gap-1.5"
          >
            {link.name}
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ))}
      </div>
    </footer>
  );
}
