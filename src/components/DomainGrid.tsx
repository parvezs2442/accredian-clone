"use client";

import React from "react";
import {
  Lightbulb,
  Brain,
  UserCheck,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

const DOMAINS = [
  {
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    title: "Leadership Elevation",
    icon: UserCheck,
  },
  {
    title: "Tech & Data Insights",
    icon: BarChart3,
  },
  {
    title: "Operations Excellence",
    icon: Settings,
  },
  {
    title: "Digital Enterprise",
    icon: Globe,
  },
  {
    title: "Fintech Innovation Lab",
    icon: CreditCard,
  },
];

export default function DomainGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="text-lg text-blue-600 font-semibold tracking-wide">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DOMAINS.map((domain, index) => {
            const IconComponent = domain.icon;
            const isLast = index === DOMAINS.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 group select-none ${
                  isLast ? "md:col-span-2 lg:col-span-3 md:max-w-md md:mx-auto md:w-full" : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 p-4 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
