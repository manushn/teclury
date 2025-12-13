import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "AI Solutions | Teclury",
  description:
    "Explore Teclury’s AI solutions including AI Assistants, Search & RAG, Computer Vision, and Business Automation.",
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
