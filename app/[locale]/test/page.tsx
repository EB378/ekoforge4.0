import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <div className="relative flex items-center justify-center h-[75vh]">
              <Image
                src="/backgroundmain.png"
                alt="Hero Background"
                fill
                className="absolute top-0 left-0 object-cover blur-sm brightness-50"
              />
              <h1
                className="relative z-10 text-[8vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
                style={{
                  background: "linear-gradient(to right, #ff7eb3, #fdffb6)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
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
                    {t("Contact Us")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Problem-Solution Section */}
          <div className="relative px-6 sm:px-12 lg:px-24 mt-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              <span className="relative z-10">
                {t("What's Holding")}{" "}
                <span className="text-blue-400 bg-blue-900 px-2 py-1 rounded-lg inline-block">
                  {t("You Back?")}
                </span>
              </span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {/* Challenge Cards */}
              <div className="relative w-full max-w-[300px] p-6 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-white text-xl font-bold">{t("Challenge1")}</h3>
                <p className="mt-2 text-white text-sm">{t("ChallengeDetail1")}</p>
              </div>
              <div className="relative w-full max-w-[300px] p-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-white text-xl font-bold">{t("Challenge2")}</h3>
                <p className="mt-2 text-white text-sm">{t("ChallengeDetail2")}</p>
              </div>
              <div className="relative w-full max-w-[300px] p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-white text-xl font-bold">{t("Challenge3")}</h3>
                <p className="mt-2 text-white text-sm">{t("ChallengeDetail3")}</p>
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

          {/* Contact Section */}
          <Contact locale={""} />

          {/* Footer */}
          <Footer locale={""} />
        </main>
      </div>
    </>
  );
}
