"use client";

import React, { useState } from "react";
import {
  Wrench,
  UserCheck,
  GitBranch,
  Cpu,
  Layers,
  TrendingUp,
  Clock,
  ChevronRight,
} from "lucide-react";

const TIMELINE_STEPS = [
  {
    id: 1,
    title: "Tailored Solutions",
    icon: Wrench,
    desc: "Custom-fit curriculum designed around your organization's specific challenges and strategic business priorities.",
  },
  {
    id: 2,
    title: "Expert Guidance",
    icon: UserCheck,
    desc: "Direct mentorship and instruction from industry leaders and top practitioners with proven track records.",
  },
  {
    id: 3,
    title: "Innovative Framework",
    icon: GitBranch,
    desc: "Learning frameworks engineered to facilitate rapid conceptual absorption and real-world application.",
  },
  {
    id: 4,
    title: "Advanced Technology",
    icon: Cpu,
    desc: "Hands-on projects with emerging technologies like Generative AI, Cloud Computing, and Big Data.",
  },
  {
    id: 5,
    title: "Diverse Offerings",
    icon: Layers,
    desc: "Broad spectrum of courses covering Product Management, FinTech, Data Science, and Leadership.",
  },
  {
    id: 6,
    title: "Proven Impact",
    icon: TrendingUp,
    desc: "Measurable performance improvements in workforce capability, project execution, and strategic output.",
  },
  {
    id: 7,
    title: "Flexible Delivery",
    icon: Clock,
    desc: "Hybrid learning models, self-paced content, and live masterclasses built around busy professional schedules.",
  },
];

export default function EdgeTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const activeData = TIMELINE_STEPS[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <section id="edge" className="bg-slate-50 py-16 lg:py-24 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            Our step-by-step approach ensures a premium learning experience tailored to modern enterprise demands.
          </p>
        </div>

        {/* Desktop timeline layout */}
        <div className="hidden lg:block relative mb-12">
          {/* Connector Line */}
          <div className="absolute top-[28px] left-[6%] right-[6%] h-0.5 bg-gray-200 -z-10" />
          {/* Progress fill */}
          <div 
            className="absolute top-[28px] left-[6%] h-0.5 bg-blue-600 -z-10 transition-all duration-500" 
            style={{ width: `${(activeStep / (TIMELINE_STEPS.length - 1)) * 88}%` }}
          />

          <div className="flex justify-between items-center px-4">
            {TIMELINE_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  style={{ width: "12%" }}
                >
                  {/* Icon Circle */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 scale-110"
                        : isPassed
                        ? "bg-white border-blue-600 text-blue-600"
                        : "bg-white border-gray-200 text-gray-400 group-hover:border-blue-400 group-hover:text-blue-500"
                    }`}
                  >
                    <StepIcon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <span
                    className={`mt-4 text-xs font-bold text-center tracking-tight transition-colors duration-200 ${
                      isSelected ? "text-blue-600" : "text-gray-500 group-hover:text-gray-900"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Card display (Desktop) */}
        <div className="hidden lg:block bg-white border border-gray-200 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ActiveIcon className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                Milestone {activeData.id} of 7
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">
                {activeData.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {activeData.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile vertical accordion/list layout */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          {TIMELINE_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.id}
                className={`border rounded-2xl transition-all duration-300 bg-white ${
                  isSelected ? "border-blue-600 shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActiveStep(idx)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-gray-900">{step.title}</span>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      isSelected ? "rotate-90 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isSelected && (
                  <div className="px-5 pb-5 border-t border-gray-100 pt-4 animate-fade-in">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
