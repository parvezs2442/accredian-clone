"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_DATA: Record<string, FAQItem[]> = {
  "About Course": [
    {
      question: "Are these programs customizable to our tech stack?",
      answer: "Yes, all Accredian Enterprise programs are customizable. We consult with your engineering and leadership teams to integrate your specific software, tools, frameworks, and coding standards directly into the case studies.",
    },
    {
      question: "What domains do you cover?",
      answer: "We offer comprehensive training pathways in Product & Innovation, Generative AI, Leadership Development, Tech & Data Science, Operations Excellence, Digital Enterprise, and FinTech.",
    },
    {
      question: "Is there hands-on project work?",
      answer: "Absolutely. Every program utilizes the CAT framework (Concept, Application, Tools) where learners work on real enterprise case studies, sandbox coding environments, and live labs to apply what they learn.",
    },
  ],
  "About Delivery": [
    {
      question: "What learning formats do you support?",
      answer: "We support virtual live-instructor classrooms, in-person intensive bootcamps, and hybrid models containing self-paced modules alongside live masterclasses and projects.",
    },
    {
      question: "How long are the typical training programs?",
      answer: "Programs range from intensive 2-day bootcamps to comprehensive 3-to-6-month deep-dives, depending on the depth, target seniority, and learning objectives.",
    },
    {
      question: "Do you provide mentoring after the course?",
      answer: "Yes, we support our learners with regular doubt-clearing clinics and mentor-guided project support for up to 3 months after program delivery.",
    },
  ],
  "Miscellaneous": [
    {
      question: "How do we measure the impact of the program?",
      answer: "We provide pre- and post-program competency assessments, group-level engagement dashboards, and customized capstone project reviews to measure skill gap closures.",
    },
    {
      question: "What is the minimum cohort size?",
      answer: "For dedicated enterprise-level customized programs, we recommend a minimum cohort size of 15-20 professionals to foster rich peer-to-peer learning.",
    },
    {
      question: "How do we get started?",
      answer: "Simply click the 'Enquire Now' button, fill out the form, and our learning consulting team will schedule an initial alignment call with you within 24 hours.",
    },
  ],
};

export default function FAQ() {
  const categories = Object.keys(FAQ_DATA);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenIndexes([]); // Reset accordions on category switch
  };

  return (
    <section id="faqs" className="bg-slate-50 py-16 lg:py-24 border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 font-normal">
            Everything you need to know about our customizable programs, delivery methods, and corporate setup.
          </p>
        </div>

        {/* FAQ Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Side: Category Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 border-gray-200 lg:space-y-2 scrollbar-none shrink-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-3.5 text-sm font-bold rounded-xl whitespace-nowrap text-left transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_DATA[activeCategory].map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-gray-900 text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-50 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
