import "./globals.css";
import { DM_Sans } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dmSans.variable">
      <body className="bg-[#070815] text-white">
        <Header />
        <main> {children}</main>
        <Footer />
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
// Ensure the required module 'cliui' is installed
import { useEffect } from "react";

// useEffect(() => {
//   const checkCliuiModule = async () => {
//     try {
//       await import('cliui');
//     } catch (error) {
//       console.error("Module 'cliui' is not found. Please install it using 'npm install cliui'");
//     }
//   };

//   checkCliuiModule();
// }, []);