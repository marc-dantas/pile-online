import type { Metadata } from "next";
import "./style.css";
import "bulma";

export const metadata: Metadata = {
    title: "Pile",
    description: "Concatenative scripting programming language",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="has-navbar-fixed-top" data-theme="dark">
            <body>
                {children}
            </body>
        </html>
    );
}
