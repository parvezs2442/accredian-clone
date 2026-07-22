"use client";

import React from "react";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

const AUDIENCE_CARDS = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

export default function Audience() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Main Blue Container */}
        <div className="relative overflow-hidden rounded-[32px] bg-blue-600 px-8 py-16 md:px-12 md:py-20 lg:px-16 shadow-2xl">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 -z-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-0 h-96 w-96 rounded-full bg-blue-700/40 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading and Illustration */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-bold text-blue-200 uppercase tracking-widest">
                  Who Should Join?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Vector Illustration */}
              <div className="w-full max-w-sm mx-auto lg:mx-0 aspect-[4/3] bg-blue-500/20 border border-blue-400/20 rounded-2xl p-6 flex flex-col items-center justify-center relative shadow-inner">
                {/* Clean inline SVG representing two professionals collaborating */}
                <svg
                  viewBox="0 0 200 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-blue-100"
                >
                  {/* Background Laptop screen */}
                  <rect x="35" y="70" width="70" height="45" rx="3" fill="#3B82F6" opacity="0.4" />
                  <rect x="30" y="115" width="80" height="4" rx="2" fill="#93C5FD" />
                  
                  {/* Woman Avatar Left */}
                  <circle cx="60" cy="50" r="16" fill="#FFFFFF" />
                  <path d="M60 34c-4.4 0-8 3.6-8 8v8h16v-8c0-4.4-3.6-8-8-8z" fill="#93C5FD" />
                  {/* Woman hair & shoulders */}
                  <path d="M40 78c0-8.8 7.2-16 16-16h8c8.8 0 16 7.2 16 16v12H40V78z" fill="#1E40AF" />
                  
                  {/* Man Avatar Right */}
                  <circle cx="130" cy="55" r="14" fill="#FFFFFF" />
                  <rect x="123" y="55" width="14" height="14" fill="#60A5FA" />
                  {/* Man Suit shoulders */}
                  <path d="M110 82c0-7.7 6.3-14 14-14h12c7.7 0 14 6.3 14 14v10H110V82z" fill="#1E3A8A" />
                  {/* Man Shirt & Tie details */}
                  <path d="M130 68l6 10h-12l6-10z" fill="#FFFFFF" />
                  <path d="M129 78h2v12h-2z" fill="#3B82F6" />

                  {/* Tablet element */}
                  <rect x="140" y="80" width="25" height="18" rx="2" fill="#10B981" transform="rotate(-10 140 80)" />
                  <line x1="144" y1="84" x2="156" y2="81" stroke="#FFFFFF" strokeWidth="1.5" />
                  
                  {/* Float charts / icons */}
                  <circle cx="105" cy="30" r="10" fill="#10B981" opacity="0.9" />
                  <path d="M102 33l2-3 2 1 3-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <rect x="85" y="15" width="8" height="8" rx="1" fill="#F59E0B" />
                </svg>
                
                {/* Floating caption badge */}
                <div className="absolute bottom-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold text-white tracking-wide">
                  Cross-functional Collaboration
                </div>
              </div>
            </div>

            {/* Right Column: Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {AUDIENCE_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col p-6 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-sans tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-blue-100/85 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
