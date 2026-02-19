import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Ooops...</h1>
      <h2 className="text-2xl mb-4">That page cannot be found :(</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          Homepage
        </Link>
      </p>
    </div>
  );
}
