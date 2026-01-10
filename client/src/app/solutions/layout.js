import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "AI Solutions | Teclury – Intelligent Systems for Real Businesses",
  description:
    "Explore Teclury’s AI solutions including AI assistants, RAG-based search systems, computer vision, and business process automation.",
  keywords: [
    "AI solutions",
    "Teclury AI",
    "AI assistants",
    "RAG search",
    "Computer vision AI",
    "Business automation",
    "Enterprise AI systems",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Teclury AI Solutions",
    description:
      "Discover Teclury’s AI-powered solutions designed to automate workflows, enhance decision-making, and scale businesses.",
    url: "https://www.teclury.in/solutions",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teclury AI Solutions",
    description:
      "AI assistants, RAG systems, computer vision, and automation solutions by Teclury.",
  },
};

export default function SolutionsLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
