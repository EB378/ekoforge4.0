"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Anna Svensson",
    title: "CEO, Svensson Co.",
    feedback: "EkoForge has completely transformed our paid advertising strategy. Our ROI skyrocketed within weeks!",
    rating: 5,
    image: "/anna.jpg"
  },
  {
    id: 2,
    name: "James Miller",
    title: "Marketing Director, BrightTech",
    feedback: "Working with EkoForge was a game-changer. Their expertise in Google Ads delivered exceptional results.",
    rating: 4.5,
    image: "/james.jpg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl text-center mb-12">What Our Clients Say</h2>
      <div className="relative w-4/5 mx-auto overflow-hidden">
        {/* Testimonial Slide */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 mb-4"
              />
              <p className="italic">{testimonial.feedback}</p>
              <h3 className="mt-4 font-bold">{testimonial.name}</h3>
              <p>{testimonial.title}</p>
              <div className="mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`inline-block text-yellow-400 ${
                      index < Math.floor(testimonial.rating) ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}