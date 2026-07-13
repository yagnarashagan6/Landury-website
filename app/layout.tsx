import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landury | Premium Automated Laundry Solutions",
  description:
    "Precision in Every Wash. Excellence in Every Fold. Government authorized premium laundry service powered by fully automated industrial machines delivering unmatched fabric care with fast turnaround.",
  keywords: [
    "laundry",
    "premium laundry",
    "automated laundry",
    "dry cleaning",
    "steam iron",
    "fabric care",
    "door delivery",
    "industrial laundry",
    "Villupuram",
  ],
  openGraph: {
    title: "Landury | Premium Automated Laundry Solutions",
    description:
      "Government authorized premium laundry service powered by fully automated industrial machines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
