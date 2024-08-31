import type { Metadata } from "next";
import "../styles/globals.css";
import { ServerProvider } from "@/contexts/serverCtx";

export const metadata: Metadata = {
  title: "Flare",
  description: "Chat now with all of your friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="bg-global text-white">
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
