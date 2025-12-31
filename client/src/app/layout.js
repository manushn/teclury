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
  metadataBase: new URL("https://www.teclury.in"),

  title: {
    default: "Teclury | Next-Gen AI & Software Solutions",
    template: "%s | Teclury",
  },

  description:
    "Teclury builds next-generation AI, web, and mobile solutions for startups and businesses. Scalable. Secure. Future-ready.",

  keywords: [
    "AI solutions", 
    "Software Startup", 
    "Web Development", 
    "Next.js Development", 
    "Teclury",
    "teclury", 
    "Teclury.in",
    "teclury.in",
    "Teclury labs",
    "teclury labs"
  ],

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },

  /** ✅ CANONICAL URL — HELPS SEO RANKING */
  alternates: {
    canonical: "https://www.teclury.in",
  },

  openGraph: {
    title: "Teclury – Next-Gen AI & Software Solutions",
    description:
      "We design and build AI-powered, scalable digital products for modern businesses.",
    url: "https://www.teclury.in",
    siteName: "Teclury",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.teclury.in/icon.png", 
        width: 1200,
        height: 630,
        alt: "Teclury AI & Software Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Teclury | Next-Gen AI & Software Solutions",
    description:
      "Building intelligent, scalable software for the future.",
    images: ["https://www.teclury.in/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Teclury",
              url: "https://www.teclury.in",
              logo: "https://www.teclury.in/icon.png",
              sameAs: [
                "https://www.instagram.com/teclury",
                "https://www.facebook.com/profile.php?id=61585237778058",
                "https://www.linkedin.com/company/teclury",
                "https://github.com/teclury"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "contact@teclury.in" 
              }
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