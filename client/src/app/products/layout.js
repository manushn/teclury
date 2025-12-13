import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Products | Teclury",
  description:
    "Explore Teclury’s upcoming AI products. Register for early access to our AI Sales Agent and Knowledge-based Chatbot API.",
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
