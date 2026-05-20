import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import ClientBody from "./Clientbody";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: DATA.name, template: `%s | ${DATA.name}` },
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  description: DATA.description,
  keywords: DATA.keywords,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    title: DATA.name,
    description: DATA.description,
    card: "summary_large_image",
    creator: "@adrielgama",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
