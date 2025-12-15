import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Teclury | Next-Gen AI & Software Solutions",
    template: "%s | Teclury",
  },
  description:
    "Teclury builds next-generation AI, web, and mobile solutions for startups and businesses. Scalable. Secure. Future-ready.",

  metadataBase: new URL("https://teclury.vercel.app"),

  verification: {
    google: "L9iAehaDbmnMbo7ZQMnUg7_WrONq97ax2eBnsYyz2Fc",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Teclury – Next-Gen AI & Software Solutions",
    description:
      "We design and build AI-powered, scalable digital products for modern businesses.",
    url: "https://teclury.vercel.app",
    siteName: "Teclury",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Teclury | Next-Gen AI & Software Solutions",
    description:
      "Building intelligent, scalable software for the future.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (Brand Identity) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Teclury",
              url: "https://teclury.vercel.app",
              logo: "https://teclury.vercel.app/icon.png",
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
