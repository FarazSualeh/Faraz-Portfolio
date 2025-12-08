"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  // You can log error in console if needed
  console.error(error);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Something went wrong!" />
      </body>
    </html>
  );
}
