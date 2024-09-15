import type { Metadata } from "next";
import "../styles/globals.css";
import { ServerProvider } from "@/contexts/serverCtx";
import { lato } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Flare | Home",
  description: "Chat now with all of your friends!",
  icons: {
    icon: "/images/logos/ico/Logo-Purple.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`bg-global text-white ${lato.className} antialiased min-h-screen grid`}
      >
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
