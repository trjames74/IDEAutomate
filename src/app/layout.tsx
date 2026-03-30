import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDEA — Industrial Design Engineering & Automation",
  description:
    "We design cut-and-sew products and build the business processes and software to manufacture them at scale. Serving marine, RV, canvas, and industrial insulation industries.",
  keywords: [
    "industrial fabrics",
    "cut and sew automation",
    "marine upholstery",
    "RV furniture manufacturing",
    "canvas products",
    "insulation blankets",
    "product lifecycle management",
    "manufacturing software",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-white antialiased">{children}</body>
    </html>
  );
}
