"use client";

import { useTranslations } from "next-intl";
import React, { FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

const Contact = ({ locale }: { locale: string }) => {
  const t = useTranslations("Contact");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "f1363286-3773-4366-a303-f62f033511e6",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          reason: formData.get("reason"),
          source: formData.get("source"),
          website: formData.get("website"),
          budget: formData.get("budget"),
        }),
      });

      const result = await response.json();
      if (result.success) alert("Thank you for your submission!");
      else alert("Submission failed. Please try again.");
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      id="contactsec"
      className="relative py-16 px-6 bg-fixed bg-[url('/backgroundmain-2.png')] bg-cover bg-center text-white overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            {t("title")}
          </h1>
          <form
            name="contact"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative group">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="peer w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base transition-all peer-focus:top-3 peer-focus:text-sm">
                {t("name")}
              </label>
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="peer w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              />
              <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base transition-all peer-focus:top-3 peer-focus:text-sm">
                {t("emailentry")}
              </label>
            </div>
            <div className="relative group">
              <textarea
                name="reason"
                required
                rows={4}
                placeholder=" "
                className="peer w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              ></textarea>
              <label className="absolute left-3 top-3 text-gray-400 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base transition-all peer-focus:top-3 peer-focus:text-sm">
                {t("reason")}
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {t("send")}
            </button>
          </form>
        </div>

        {/* Contact Info and Quote */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8 text-center lg:text-left">
          {/* Quote */}
          <div className="p-6 bg-black/70 rounded-lg border border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold italic">{t("q1")}</h3>
            <h3 className="text-xl font-semibold italic">{t("q2")}</h3>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{t("contact information")}</h2>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-400 text-2xl" />
              <a href="tel:+358442413840" className="hover:underline">
                +358 44 2413 840
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <a href="mailto:ekoforge@gmail.com" className="hover:underline">
                ekoforge@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaBuilding className="text-yellow-400 text-2xl" />
              <p>EkoForge Oy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
