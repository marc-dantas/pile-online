import type { Metadata } from "next";
import "./style.css";
import "bulma";

export const metadata: Metadata = {
  title: "Pile Programming Language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
