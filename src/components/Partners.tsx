"use client";

import React from "react";

const PARTNERS = [
  { name: "Reliance", logoText: "Reliance", logoSub: "INDUSTRIES" },
  { name: "HCL", logoText: "HCLTech", logoSub: "Supercharging Progress" },
  { name: "IBM", logoText: "IBM", logoSub: "Technology" },
  { name: "CRIS", logoText: "CRIS", logoSub: "Railway Info Systems" },
  { name: "ADP", logoText: "ADP", logoSub: "Always Designing for People" },
  { name: "Bayer", logoText: "Bayer", logoSub: "Science For A Better Life" },
];

export default function Partners() {
  return (
    <section id="clients" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            We collaborate with industry leaders and government institutions to deliver top-tier corporate learning solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-gray-150 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors duration-200 select-none shadow-sm"
            >
              <span className="text-xl font-extrabold tracking-tight text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {partner.logoText}
              </span>
              <span className="text-[9px] text-gray-400 mt-1 font-semibold tracking-wider uppercase text-center">
                {partner.logoSub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
