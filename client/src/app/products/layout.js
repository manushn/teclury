import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Products | Teclury – AI Solutions Built for Scale",
  description:
    "Explore Teclury’s AI-powered products. Get early access to our AI Sales Agent and knowledge-based chatbot APIs designed for real business use.",
  keywords: [
    "Teclury products",
    "AI Sales Agent",
    "Chatbot API",
    "Knowledge-based AI",
    "Business automation AI",
    "AI SaaS products",
    "Enterprise AI solutions",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Teclury Products",
    description:
      "Discover Teclury’s AI products including our AI Sales Agent and chatbot APIs built for scalable business automation.",
    url: "https://www.teclury.in/products",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teclury Products",
    description:
      "Explore AI-powered products by Teclury — automation, sales intelligence, and chatbot APIs.",
  },
};

export default function ProductsLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
