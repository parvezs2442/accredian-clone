"use client";

import React from "react";
import { Lightbulb, Code, Settings } from "lucide-react";

const CAT_STEPS = [
  {
    title: "Concept",
    desc: "Foundational knowledge for deep subject understanding.",
    icon: Lightbulb,
  },
  {
    title: "Application",
    desc: "Practical implementation through real-world scenarios.",
    icon: Code,
  },
  {
    title: "Tools",
    desc: "Resources and techniques for effective skill mastery.",
    icon: Settings,
  },
];

export default function CATFramework() {
  return (
    <section id="cat" className="bg-slate-50 py-16 lg:py-24 border-y border-gray-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="text-lg text-gray-600 font-semibold tracking-wide">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        {/* Desktop CAT Layout with Wavy SVG Connector */}
        <div className="relative hidden lg:flex justify-between items-center max-w-5xl mx-auto h-[350px] px-8">
          
          {/* SVG Connector Wave */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <svg
              viewBox="0 0 1000 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue-600"
            >
              {/* Concept Circle Path + Curve to Application */}
              <path
                d="M 150 175 
                   A 75 75 0 1 1 203 227 
                   C 260 280, 340 280, 397 227 
                   A 75 75 0 1 0 450 175 
                   C 500 120, 580 120, 630 175 
                   A 75 75 0 1 1 683 227
                   C 740 280, 820 280, 877 227
                   A 75 75 0 1 0 920 175"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="4 6"
                opacity="0.2"
              />
              {/* Main solid flow path */}
              <path
                d="M 150 100
                   A 75 75 0 1 0 225 175
                   C 275 250, 350 250, 400 175
                   A 75 75 0 1 1 550 175
                   C 600 100, 675 100, 725 175
                   A 75 75 0 1 0 800 250"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="text-blue-600"
              />
              
              {/* Connector dots */}
              <circle cx="150" cy="100" r="6" fill="#2563EB" />
              <circle cx="800" cy="250" r="6" fill="#2563EB" />
            </svg>
          </div>

          {/* Cards positioned to match the flow */}
          {CAT_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            
            // Alternating y-alignment to match the wave peaks/valleys
            let alignClass = "";
            if (idx === 0) alignClass = "-translate-y-6";
            if (idx === 1) alignClass = "translate-y-6";
            if (idx === 2) alignClass = "-translate-y-6";

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center bg-white rounded-full border-4 border-white shadow-xl w-72 h-72 p-8 text-center transition-transform duration-300 hover:scale-105 ${alignClass}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2 font-sans">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical framework */}
        <div className="lg:hidden relative flex flex-col space-y-12 max-w-sm mx-auto px-4 py-8">
          {/* Vertical connector line */}
          <div className="absolute top-16 bottom-16 left-1/2 -ml-0.5 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 -z-10" />

          {CAT_STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-250 p-8 text-center shadow-lg transition-transform duration-300 hover:scale-[1.02] relative"
              >
                {/* Number Badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-extrabold text-sm border-4 border-white shadow">
                  {idx + 1}
                </div>
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4 mt-2">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
