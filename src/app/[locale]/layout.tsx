import type { Metadata } from "next";
import "../globals.css";
import Nav from '../components/nav';
import Footer from "../components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "EkoForge",
  description: "Digital Marketing and Media Manegment",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div>
            <Nav/>
            {children}
            <Footer/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
