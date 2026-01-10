import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Teclury – Build, Innovate, Empower",
  description:
    "Learn about Teclury — a full-stack & AI-focused engineering company empowering businesses and young innovators through practical technology and open learning.",
  keywords: [
    "About Teclury",
    "Teclury AI company",
    "Full-stack development company",
    "AI engineering startup",
    "RAG systems",
    "AI agents",
    "Tech education and mentorship",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Teclury",
    description:
      "Discover Teclury’s mission, vision, and journey in building impactful AI-powered and full-stack solutions.",
    url: "https://www.teclury.in/about",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Teclury",
    description:
      "Teclury builds AI-powered products and full-stack solutions while empowering the next generation of engineers.",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
