import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Teclury AI Lab | Open-Source AI for Learning",
  description:
    "Teclury AI Lab is an open-source initiative where we build datasets, AI models, and intelligent agents to help students and developers learn AI practically.",
};

export default function AILabLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
