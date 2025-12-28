import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainContainer from "@/components/MainContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YourMark",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "we believe clothing should speak your story. We create premium custom T-shirts that let you design, personalize, and wear your identity with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
