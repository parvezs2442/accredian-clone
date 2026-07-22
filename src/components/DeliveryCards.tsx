"use client";

import React from "react";
import { FileSearch, Layers, Sparkles } from "lucide-react";

const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Skill Gap Analysis",
    desc: "We perform a thorough evaluation of your workforce's current competencies to discover structural gaps and growth opportunities.",
    icon: FileSearch,
  },
  {
    step: "02",
    title: "Customized Training Plan",
    desc: "We engineer a custom-fit roadmap aligned specifically with your organization's business goals and technology stacks.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Flexible Program Delivery",
    desc: "We offer virtual masterclasses, interactive bootcamps, or hybrid programs structured around your team's busy schedule.",
    icon: Layers,
  },
];

export default function DeliveryCards() {
  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How We <span className="text-blue-600">Deliver Results</span> That Matter
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            A structured, analytical learning journey co-created to ensure maximum retention and performance lift.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERY_STEPS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-8 bg-white border border-gray-150 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-8 text-4xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors select-none font-mono">
                  {item.step}
                </div>

                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 p-3 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
