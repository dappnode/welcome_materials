import React from "react";
// Next js
import Link from "next/link";
// Material UI
import theme from "../utils/materialUi";
import { Card, CardContent, ThemeProvider, CardHeader, Grid } from "@material-ui/core";

export default function Home() {
  const connectionMethods = [
    { title: "Wi-Fi", description: "START HERE", tutorialPath: "/wifi" },
    { title: "LND", description: "Local Network Discovery", tutorialPath: "/avahi" },
    { title: "VPN", description: "Connect from anywhere", tutorialPath: "/vpn" },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" spacing={4}>
        {connectionMethods.map((method, i) => (
          <Grid key={i} item>
            <Link href={method.tutorialPath}>
              <Card>
                <CardHeader title={method.title}></CardHeader>
                <CardContent children={method.description}></CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
