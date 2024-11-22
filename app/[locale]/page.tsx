{/* Imports */}
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-black text-white">
      <main className="w-screen">
        <div className="relative flex flex-col items-center justify-center w-screen bg-black text-center">
          {/* Parallax Cutout Text */}
          <div className="relative min-h-[50vh] w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Cutout Text */}
            <h1>
              <span className="bg-clip-text bg-fixed text-transparent bg-[url('/backgroundmain.png')] bg-no-repeat bg-cover text-8xl leading-none">
                {t("More Growth More Sales")}
                <br />
                {t("More Turnover Guaranteed")}
              </span>
            </h1>
          </div>

          {/* CTA */}
          <div className="flex justify-center space-x-4 mt-8">
            <Link href="https://calendly.com/ekoforge">
              <button className="px-6 py-3 bg-white text-black font-bold text-xl rounded-full border border-white hover:opacity-80">
                {t("CTA")}
              </button>
            </Link>
            <Link href="#contactsec">
              <button className="px-6 py-3 bg-transparent text-white font-bold text-xl rounded-full border border-dotted border-white hover:opacity-80">
                {t("contact")}
              </button>
            </Link>
          </div>
          <p className="mt-8 text-xl text-yellow-400">{t("nextlevel")}</p>

          {/* Tension/Agitation/Problem */}
          <div className="w-screen px-6 mt-16 text-center">
            <h3 className="text-3xl font-medium">{t("agitate1")}</h3>
            <h2 className="text-4xl font-bold mt-4">{t("agitate2")}</h2>
            <h3 className="text-3xl font-medium mt-4">{t("agitate3")}</h3>

            <div className="flex flex-wrap gap-8 justify-center mt-8">
              {/* Point 1 */}
              <div className="flex-1 min-w-[30%] p-6 border-t-4 border-yellow-400 rounded-t-lg text-white">
                <h3 className="text-2xl font-semibold">{t("agitatepoint1")}</h3>
                <p className="mt-4">{t("agitatepoint11")}</p>
                <p className="mt-4">{t("agitatepoint12")}</p>
              </div>
              {/* Point 2 */}
              <div className="flex-1 min-w-[30%] p-6 border-t-4 border-yellow-400 rounded-t-lg text-white">
                <h3 className="text-2xl font-semibold">{t("agitatepoint2")}</h3>
                <p className="mt-4">{t("agitatepoint21")}</p>
                <p className="mt-4">{t("agitatepoint22")}</p>
              </div>
              {/* Point 3 */}
              <div className="flex-1 min-w-[30%] p-6 border-t-4 border-amber-300 rounded-t-lg text-white">
                <h3 className="text-2xl font-semibold">{t("agitatepoint3")}</h3>
                <p className="mt-4">{t("agitatepoint31")}</p>
                <p className="mt-4">{t("agitatepoint32")}</p>
              </div>
            </div>
          </div>

          <hr className="w-full border-t border-white mt-16" id="clients" />

          {/* CTA 2 */}
          <div className="text-center mt-16 w-screen px-6">
            <h3 className="text-3xl font-medium">{t("CTA1")}</h3>
            <h2 className="text-4xl font-bold mt-4">{t("CTA2")}</h2>
            <h3 className="text-3xl font-medium mt-4">{t("CTA3")}</h3>

            <div className="flex justify-center space-x-4 mt-8">
              <Link href="https://calendly.com/ekoforge">
                <button className="px-6 py-3 bg-white text-black font-bold text-xl rounded-full border border-white hover:opacity-80">
                  {t("CTA4")}
                </button>
              </Link>
              <Link href="#contactsec">
                <button className="px-6 py-3 bg-transparent text-white font-bold text-xl rounded-full border border-dotted border-white hover:opacity-80">
                  {t("contact")}
                </button>
              </Link>
            </div>
            <p className="mt-8 text-yellow-400 text-3xl">{t("CTA5")}</p>
          </div>
 
          {/* Testimonials */}
          <div className="mt-16 w-screen px-6 flex justify-center text-center" id="testimonials">
            <div className="flex items-center gap-8 p-8 border-b border-white rounded-b-lg">
              <Image
                src="/ekotestimoonial1.png"
                width={150}
                height={150}
                alt="Testimonial Client Logo Blurred"
                className="rounded-full"
              />
              <h2 className="text-xl max-w-lg">
                {t("testimonials1")}<br />
                <br />— Kimmo, 2024
              </h2>
            </div>
          </div>

          {/* Distinction */}
          <div className="mt-16 text-center w-screen px-6">
            <h2 className="text-3xl font-medium">{t("distinction1")}</h2>
            <h1 className="text-5xl font-bold mt-4">{t("distinction2")}</h1>

            <div className="flex flex-wrap gap-8 justify-center mt-8">
              {/* Point 1 */}
              <div className="flex-1 min-w-[30%] p-4 rounded-lg text-center bg-clip-padding bg-fixed text-black bg-[url('/backgroundmain.png')] bg-no-repeat bg-cover leading-none">
                <div className=" p-6	bg-white/60 rounded-lg">
                  <h3 className="text-2xl font-semibold">{t("distinctionpoint1")}</h3>
                  <p className="mt-4">{t("distinctionpoint11")}</p>
                  <p className="mt-4">{t("distinctionpoint12")}</p>
                </div>
              </div>
              {/* Point 2 */}
              <div className="flex-1 min-w-[30%] p-4 rounded-lg text-center bg-clip-padding bg-fixed text-black bg-[url('/backgroundmain.png')] bg-no-repeat bg-cover leading-none">
                <div className=" p-6	bg-white/60 rounded-lg">
                  <h3 className="text-2xl font-semibold">{t("distinctionpoint2")}</h3>
                  <p className="mt-4">{t("distinctionpoint21")}</p>
                  <p className="mt-4">{t("distinctionpoint22")}</p>
                </div>
              </div>
              {/* Point 3 */}
              <div className="flex-1 min-w-[30%] p-4 rounded-lg text-center bg-clip-padding bg-fixed text-black bg-[url('/backgroundmain.png')] bg-no-repeat bg-cover leading-none">
                <div className=" p-6	bg-white/60 rounded-lg">
                  <h3 className="text-2xl font-semibold">{t("distinctionpoint3")}</h3>
                  <p className="mt-4">{t("distinctionpoint31")}</p>
                  <p className="mt-4">{t("distinctionpoint32")}</p>
                </div>
              </div>
            </div>
          </div>


          {/* Contact Section */}
          <Contact locale={""} />
        </div>
      </main>
    </div>
  );
}