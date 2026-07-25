import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/lib/fontawesome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NorthStar Life Coaching — Navigate Your Life with Clarity & Purpose",
    template: "%s | NorthStar Life Coaching",
  },
  description:
    "Transform your life with professional coaching. NorthStar Life Coaching provides one-on-one, group, career, leadership, and wellness coaching to help you navigate life's crossroads with confidence and clarity.",
  keywords: [
    "life coaching",
    "career coaching",
    "leadership development",
    "wellness coach",
    "personal growth",
    "Portland coach",
    "NorthStar coaching",
    "life purpose",
    "career transition",
    "burnout recovery",
  ],
  authors: [{ name: "NorthStar Life Coaching" }],
  creator: "NorthStar Life Coaching",
  publisher: "NorthStar Life Coaching",
  metadataBase: new URL("https://northstarlifecoaching.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NorthStar Life Coaching",
    title: "NorthStar Life Coaching — Navigate Your Life with Clarity & Purpose",
    description:
      "Transform your life with professional coaching that guides you toward clarity, purpose, and fulfillment.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "NorthStar Life Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthStar Life Coaching — Navigate Your Life with Clarity & Purpose",
    description:
      "Transform your life with professional coaching that guides you toward clarity, purpose, and fulfillment.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
