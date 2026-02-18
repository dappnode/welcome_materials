import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-1 w-full">{children}</main>
      <footer className="h-22 w-full">
        <Footer />
      </footer>
    </div>
  );
}
