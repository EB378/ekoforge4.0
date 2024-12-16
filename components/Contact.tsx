"use client";

import { useTranslations } from "next-intl";
import React, { FormEvent } from "react";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

const Contact = () => {
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
          reason: formData.get("reason"),
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
    <div className="relative py-16 px-6 bg-gradient-to-br from-gray-800 to-black text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            {t("title")}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="peer w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800 outline-none transition"
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all peer-focus:top-4 peer-focus:text-sm">
                {t("name")}
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="peer w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800 outline-none transition"
              />
              <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all peer-focus:top-4 peer-focus:text-sm">
                {t("emailentry")}
              </label>
            </div>

            {/* Reason Field */}
            <div className="relative">
              <textarea
                name="reason"
                rows={4}
                required
                placeholder=" "
                className="peer w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800 outline-none transition"
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-500 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all peer-focus:top-4 peer-focus:text-sm">
                {t("reason")}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              {t("send")}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-yellow-400">{t("contact information")}</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaPhoneAlt className="text-yellow-400 text-2xl" />
              <a
                href="tel:+358442413840"
                className="text-lg hover:text-yellow-300 transition-all"
              >
                +358 44 2413 840
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaEnvelope className="text-yellow-400 text-2xl" />
              <a
                href="mailto:ekoforge@gmail.com"
                className="text-lg hover:text-yellow-300 transition-all"
              >
                ekoforge@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <FaBuilding className="text-yellow-400 text-2xl" />
              <p className="text-lg">EkoForge Oy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
