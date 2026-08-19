import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import RtkProviders from "./provider";

export const metadata: Metadata = {
  title: {
    default: "DesignHub",
    template: "%s | DesignHub",
  },
  description: "A theme-driven showcase of modern interface design principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-dvh">
          <RtkProviders>
            <Sidebar />
            <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
          </RtkProviders>
        </div>
      </body>
    </html>
  );
}
