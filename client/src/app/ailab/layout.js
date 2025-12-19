import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Teclury AI Lab | Open-Source AI for Learning & Innovation",
  description:
    "Teclury AI Lab is an open-source initiative focused on building datasets, AI models, and intelligent agents to help students and developers learn AI through real-world experimentation.",
  keywords: [
    "Teclury AI Lab",
    "Open source AI projects",
    "AI datasets",
    "AI agents",
    "Machine learning experiments",
    "Student AI projects",
    "Learn AI practically",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Teclury AI Lab",
    description:
      "Explore Teclury AI Lab — open datasets, experiments, AI agents, and tools built for hands-on learning and innovation.",
    url: "https://teclury.in/ailab",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teclury AI Lab",
    description:
      "An open-source AI lab for students and developers to explore datasets, experiments, and intelligent agents.",
  },
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
