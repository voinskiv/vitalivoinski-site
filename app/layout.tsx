import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitali Voinski - AI & Automation Advisor",
  description: "Helping businesses leverage AI to automate workflows and scale smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vitali Voinski",
              "url": "https://vitalivoinski.com",
              "sameAs": [
                "https://www.linkedin.com/in/voinskiv/",
                "https://x.com/voinskiv",
                "https://github.com/voinskiv",
                "https://www.instagram.com/voinskiv/"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
