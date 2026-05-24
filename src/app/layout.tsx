import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const siteUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | AI study tools for Android`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "StudyWise",
    "AI summaries",
    "Android study app",
    "APK download",
    "active learning",
    "flashcards",
  ],
  authors: [{ name: "Codex" }],
  creator: "Codex",
  publisher: "Codex",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Study smarter with AI`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.iconPath,
        width: 512,
        height: 512,
        alt: "StudyWise app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | Study smarter with AI`,
    description: siteConfig.description,
    images: [siteConfig.iconPath],
  },
  icons: {
    icon: [
      {
        url: siteConfig.iconPath,
        type: "image/png",
      },
    ],
    shortcut: siteConfig.iconPath,
    apple: siteConfig.iconPath,
  },
  manifest: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-black antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
