import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[90px] w-full">
        <Navbar />
      </header>
      <main className="flex-1 mx-5 my-5 flex items-center justify-center">
        {children}
      </main>
      <footer className="h-[90px] w-full">
        <Footer />
      </footer>
    </div>
  );
}
