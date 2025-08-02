import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://beshahashenafi.vercel.app"),
  title: "Beshah Ashenafi - Portfolio",
  description:
    "Beshah Ashenafi's professional portfolio showcasing front-end development skills with React.js, Next.js, and Tailwind CSS.",
  keywords: [
    "Beshah Ashenafi",
    "front-end developer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "web development",
    "Addis Ababa",
  ],
  openGraph: {
    title: "Beshah Ashenafi - Portfolio",
    description:
      "Explore Beshah Ashenafi's portfolio, featuring innovative web development projects and services.",
    url: "https://beshahashenafi.vercel.app",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beshah Ashenafi - Portfolio",
    description:
      "Explore Beshah Ashenafi's portfolio, featuring innovative web development projects and services.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Beshah Ashenafi",
            jobTitle: "Front-End Developer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Addis Ababa",
              addressCountry: "Ethiopia",
            },
            email: "mailto:beshah2017@gmail.com",
            telephone: "+251948100497",
            url: "https://beshahashenafi.vercel.app",
          })}
        </script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
