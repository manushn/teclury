import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Teclury – Let’s Build Something Great",
  description:
    "Contact Teclury to discuss your web, mobile, or AI project. Reach out for partnerships, support, or custom software solutions.",
  keywords: [
    "Contact Teclury",
    "Software development contact",
    "AI development company contact",
    "Web development services",
    "Custom software company",
    "Teclury support",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  }, 
  openGraph: {
    title: "Contact Teclury",
    description:
      "Have an idea or need help? Contact Teclury and get expert guidance on your next digital product.",
    url: "https://www.teclury.in/contact",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Teclury",
    description:
      "Get in touch with Teclury for AI, web, and mobile development solutions.",
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
