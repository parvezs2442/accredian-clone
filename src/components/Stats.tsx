"use client";

import React from "react";
import { Users, Presentation, GraduationCap } from "lucide-react";

const STATS_DATA = [
  {
    icon: Users,
    number: "50,000+",
    label: "Professionals Trained",
    desc: "Engineers, managers, and executives upskilled across top enterprises globally.",
  },
  {
    icon: Presentation,
    number: "1,500+",
    label: "Sessions Delivered",
    desc: "Interactive, hands-on learning sessions led by domain experts.",
  },
  {
    icon: GraduationCap,
    number: "10,000+",
    label: "Active Learners",
    desc: "Currently acquiring next-gen skills in tech, operations, and leadership.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-slate-50 py-16 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS_DATA.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex h-14 w-14 items-center justify-between rounded-2xl bg-blue-50 text-blue-600 p-3 mb-6">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-2 font-sans tracking-tight">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-blue-600 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
