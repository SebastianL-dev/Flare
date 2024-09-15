import Head from "next/head";

export default function SchemaMarkUp() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Flare",
            url: "https://flare-a4x.pages.dev",
            author: {
              "@type": "Person",
              name: "Sebastián Fernando Lozano",
            },
            description:
              "Flare is a real time chat to send messages to your friends or meet new people",
            publisher: {
              "@type": "Organization",
              name: "Flare",
              logo: {
                "@type": "ImageObject",
                url: "https://flare-a4x.pages.dev/_next/static/media/Text-Logo-Default-2.9e371669.svg",
              },
            },
          }),
        }}
      />
    </Head>
  );
}
