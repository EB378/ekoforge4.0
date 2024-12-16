import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Navbar locale={""} />
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <main className="w-full bg-black/80 relative">
          {/* Hero Section */}
          <div className="relative text-center overflow-hidden">
            <div className="relative flex items-center justify-center h-[45vh]">
              <Image
                src="/backgroundmain.png"
                alt="Hero Background"
                fill
                className="absolute top-0 left-0 object-cover blur-sm brightness-50"
              />
              <h1
                className="relative z-10 text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
                style={{
                  color: "white",
                }}
              >
                {t("Unleash Your Business Potential")}
              </h1>
            </div>

            {/* Diagonal CTA */}
            <div className="relative -skew-y-3 bg-gradient-to-r from-pink-500 to-purple-600 p-8">
              <div className="skew-y-3 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://calendly.com/ekoforge">
                  <button className="px-8 py-4 bg-white text-black font-bold text-xl rounded-full shadow-lg hover:scale-105 transition-transform">
                    {t("Book Your Call")}
                  </button>
                </Link>
                <Link href="#contactsec">
                  <button className="px-8 py-4 bg-transparent border border-white text-white font-bold text-xl rounded-full shadow-lg hover:scale-105 transition-transform">
                    {t("contact")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Problem-Solution Section */}
          <div className="relative px-6 sm:px-12 lg:px-24 mt-16 text-center">
            {/* Section Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-12">
              <span className="relative z-10">
                {t("What's Holding")}
                <span className="text-blue-800 bg-blue-300 px-3 py-2 rounded-lg inline-block ml-2 shadow-md">
                  {t("You Back?")}
                </span>
              </span>
            </h2>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Card 1 */}
              <div className="relative w-full max-w-[350px] p-6 bg-gradient-to-b from-yellow-600 to-orange-700 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">{t("No Experience?")}</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {t("You don’t know where to start or lack the expertise to move forward.")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative w-full max-w-[350px] p-6 bg-gradient-to-b from-teal-600 to-blue-700 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">{t("No Time?")}</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {t("You’re too busy managing your business to focus on growth strategies.")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative w-full max-w-[350px] p-6 bg-gradient-to-b from-purple-600 to-pink-700 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">{t("No Resources?")}</h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {t("You don’t have the right tools or resources to scale effectively.")}
                </p>
              </div>
            </div>
          </div>


          {/* Call-to-Action Section */}
          <div className="mt-16 text-center px-6 sm:px-12 lg:px-24">
            <h2 className="text-2xl sm:text-4xl font-bold">{t("Your Journey Starts Here")}</h2>
            <p className="mt-4 text-lg sm:text-xl">{t("Don't let your competitors take the lead. Let's grow your business today.")}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Link href="https://calendly.com/ekoforge">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg hover:scale-105 transition-transform">
                  {t("Book a Free Consultation")}
                </button>
              </Link>
            </div>
          </div>

          <Testimonials/>

          {/* Contact Section */}
          <Contact/>

          {/* Footer */}
          <Footer locale={""} />
        </main>
      </div>
    </>
  );
}
