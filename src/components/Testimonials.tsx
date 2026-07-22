"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "The customized Gen-AI training plan designed by Accredian has dramatically boosted our product engineering velocity. Our developers transitioned from basic concepts to writing Production-ready AI features within weeks. Highly recommended.",
    author: "Amit Sharma",
    role: "Chief Technology Officer",
    company: "CloudScale Technologies",
    logoText: "CloudScale",
  },
  {
    quote: "Accredian's CAT framework provided our senior managers with outstanding operations excellence and product development frameworks. The leadership elevation cohort has already translated into measurable project efficiency increases.",
    author: "Sarah Jenkins",
    role: "VP of Learning & Development",
    company: "Finora Global",
    logoText: "Finora",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            What Our Clients <span className="text-blue-600">Are Saying</span>
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            Real impact stories from human resources, tech directors, and development leads across leading enterprises.
          </p>
        </div>

        {/* Testimonials Desktop (Side by side) */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-slate-50 border border-gray-150 rounded-2xl p-8 shadow-md relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-blue-200">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              {/* Company Logo placeholder */}
              <div className="mb-6 font-black tracking-tight text-xl text-blue-600 select-none">
                {t.logoText}
              </div>

              {/* Quote Content */}
              <blockquote className="flex-grow text-gray-600 text-sm md:text-base leading-relaxed italic mb-6">
                "{t.quote}"
              </blockquote>

              {/* Author Details */}
              <div className="border-t border-gray-200 pt-4 flex flex-col">
                <span className="font-bold text-gray-900">{t.author}</span>
                <span className="text-xs text-gray-500 font-medium">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Mobile (Carousel Slider) */}
        <div className="md:hidden flex flex-col items-center max-w-md mx-auto">
          <div className="w-full bg-slate-50 border border-gray-150 rounded-2xl p-6 shadow-md relative min-h-[300px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="absolute top-4 right-6 text-blue-200">
              <Quote className="h-8 w-8 fill-current" />
            </div>

            <div>
              <div className="mb-4 font-black tracking-tight text-lg text-blue-600 select-none">
                {TESTIMONIALS[activeIndex].logoText}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed italic mb-4">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>
            </div>

            <div className="border-t border-gray-200 pt-4 flex flex-col">
              <span className="font-bold text-gray-900 text-sm">
                {TESTIMONIALS[activeIndex].author}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {TESTIMONIALS[activeIndex].role}, {TESTIMONIALS[activeIndex].company}
              </span>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIndex === idx ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
