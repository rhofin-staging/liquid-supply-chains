import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Liquid Supply Chains";
const description =
  "How falling underwriting costs could turn world trade into an asset class, and what that would mean for growth. A working paper by Christoph Gugelmann (Rhofin Inc.).";

export const metadata: Metadata = {
  title: {
    default: `${title} — A Working Paper`,
    template: `%s — ${title}`,
  },
  description,
  authors: [{ name: "Christoph Gugelmann" }],
  keywords: [
    "trade finance",
    "working capital",
    "SME credit",
    "securitization",
    "agentic AI",
    "electronic trade documents",
    "supply chains",
    "credit rationing",
  ],
  openGraph: {
    title: `${title} — A Working Paper`,
    description,
    type: "article",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — A Working Paper`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
