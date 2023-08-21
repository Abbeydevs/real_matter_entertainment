import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      404 Error | This page is most likely not available on this website or
      check if you misspelt the url.
      <p>Go back to the </p><Link href="/">Homepage</Link>
    </div>
  );
}
