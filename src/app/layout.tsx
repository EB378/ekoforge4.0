import type { Metadata } from "next";
import "./globals.css";
import Nav from './components/nav';
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "EkoForge",
  description: "Digital Marketing and Media Manegment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
