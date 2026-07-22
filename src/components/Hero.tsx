"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  const handleCTA = () => {
    window.dispatchEvent(new Event("open-enquiry-modal"));
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-slate-50/50 rounded-l-[120px]" />
      <div className="absolute top-1/4 left-10 -z-10 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8 max-w-2xl text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-sm font-semibold text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                Accredian for Business
              </span>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Next-Gen <span className="text-blue-600">Expertise</span> For Your <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
                Empower your workforce with custom, high-impact learning programs. We co-create specialized courses to drive growth, agility, and competitive edge in your organization.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Tailored Solutions", desc: "Designed around your goals" },
                { title: "Industry Insights", desc: "Real-world relevant content" },
                { title: "Expert Guidance", desc: "Led by top global practitioners" },
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{bullet.title}</h3>
                    <p className="text-sm text-gray-500">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl active:scale-[0.98] cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-50 to-blue-100 blur-xl opacity-70 -z-10" />
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/hero-corporate.png"
                alt="Accredian Enterprise corporate collaboration"
                width={600}
                height={450}
                className="w-full h-auto object-cover aspect-[4/3]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
