import type { Metadata } from "next";
import "../../public/styles/globals.css";
import { ServerProvider } from "@/contexts/serverCtx";
import { lato } from "../../public/styles/fonts";
import SchemaMarkUp from "@/components/schemaMarkUp";

export const metadata: Metadata = {
  title: "Flare Chat App | Real-Time Chat with Rooms or Create an Account",
  description:
    "Flare Chat App offers real-time communication in an instant. Join chat rooms without the need for an account, or create your profile to save your conversations. With Flare, enjoy seamless, fast, and secure chats anytime, anywhere. Jump into the conversation and connect with others effortlessly.",
  icons: {
    icon: "/images/logos/ico/Logo-Purple.ico",
  },
  authors: {
    name: "Sebastián Lozano",
    url: "https://www.instagram.com/sebastianlozano086",
  },
  appleWebApp: {
    capable: true,
    title: "Flare Chat App | Real-Time Chat with Rooms or Create an Account",
  },
  openGraph: {
    title: "Flare Chat App | Real-Time Chat with Rooms or Create an Account",
    description:
      "Flare Chat App offers real-time communication in an instant. Join chat rooms without the need for an account, or create your profile to save your conversations. With Flare, enjoy seamless, fast, and secure chats anytime, anywhere. Jump into the conversation and connect with others effortlessly.",
    images:
      "https://flare-a4x.pages.dev/_next/static/media/Text-Logo-Default-2.9e371669.svg",
    url: "https://flare-a4x.pages.dev",
    type: "website",
    siteName: "Flare Chat",
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
        rel="preload"
      >
        <ServerProvider>{children}</ServerProvider>
      </body>
    </html>
  );
}
