import type { Metadata } from "next";
import "../styles/globals.css";
import { ServerProvider } from "@/contexts/serverCtx";
import { lato } from "@/styles/fonts";
import SchemaMarkUp from "@/components/schemaMarkUp";

export const metadata: Metadata = {
  title: "Flare | Home - Create a new world",
  description:
    "Flare is a real-time chat app where you can send messages to friends, in rooms you don't need an account. Create an account to save your conversations and enjoy chatting anytime, anywhere. Join now and start chatting in Flare!",
  icons: {
    icon: "/images/logos/ico/Logo-Purple.ico",
  },
  openGraph: {
    title: "Flare | Home - Create a new world",
    description:
      "Flare is a real-time chat app where you can send messages to friends, in rooms you don't need an account. Create an account to save your conversations and enjoy chatting anytime, anywhere. Join now and start chatting in Flare!",
    images:
      "https://flare-a4x.pages.dev/_next/static/media/Text-Logo-Default-2.9e371669.svg",
    url: "https://flare-a4x.pages.dev",
    type: "website",
    siteName: "Flare",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <SchemaMarkUp />
        <link rel="canonical" href="https://flare-a4x.pages.dev/" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`bg-global text-white ${lato.className} antialiased min-h-screen grid`}
      >
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
