

export const metadata = {
  title: "Start a Project | Teclury – Web, App & AI Development",
  description:
    "Start your project with Teclury. We build scalable web apps, mobile apps, and AI-powered solutions. Get a project proposal within 24 hours.",
  keywords: [
    "Start a project",
    "Web development company",
    "AI development services",
    "Full stack development",
    "Mobile app development",
    "Custom software development",
    "Teclury",
  ],
  authors: [{ name: "Teclury" }],
  creator: "Teclury",
  publisher: "Teclury",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Start Your Project with Teclury",
    description:
      "Tell us about your idea and get a custom project proposal within 24 hours.",
    url: "https://www.teclury.in/startproject",
    siteName: "Teclury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | Teclury",
    description:
      "Launch your web, mobile, or AI project with Teclury. Fast response. Scalable solutions.",
  },
};

export default function StartProjectLayout({ children }) {
  return (
    <>
      
      <main>{children}</main>
      
    </>
  );
}
