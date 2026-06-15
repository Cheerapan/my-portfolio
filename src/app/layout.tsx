import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Engineering, Data, Design",
  description: "A unique blend of Computer Engineering logic, Data Science capabilities, and Creative Design skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="text-zinc-100 min-h-screen antialiased selection:bg-orange-500/30">
        {children}
      </body>
    </html>
  );
}
