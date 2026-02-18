import React from "react";
// Next js
import Link from "next/link";
// Shadcn UI
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const connectionMethods = [
    { title: "Wi-Fi", description: "START HERE", tutorialPath: "/wifi" },
    { title: "Local", description: "", tutorialPath: "/local" },
    { title: "VPN", description: "", tutorialPath: "/vpn" },
  ];
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {connectionMethods.map((method, i) => (
          <Link key={i} href={method.tutorialPath}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-center">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
