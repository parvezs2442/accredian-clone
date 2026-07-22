"use client";

import React from "react";
import { BookOpen, Building2, Code2, Compass } from "lucide-react";

const COURSES = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    icon: BookOpen,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    icon: Building2,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    icon: Code2,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    icon: Compass,
    gradient: "from-blue-600 to-slate-800",
  },
];

export default function CourseCards() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>
          <p className="text-lg text-gray-600 font-semibold tracking-wide">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={index}
                className="flex flex-col h-full bg-white border border-gray-250 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 group"
              >
                {/* Visual Top Area */}
                <div className={`relative h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 bg-white/5 opacity-10" />
                  <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
