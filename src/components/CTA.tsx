"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    size: "10-50",
    domain: "Gen-AI Mastery",
    message: "",
  });

  // Listen to window event to open modal from other components
  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
      setFormSubmitted(false);
    };
    window.addEventListener("open-enquiry-modal", handleOpenModal);
    return () => window.removeEventListener("open-enquiry-modal", handleOpenModal);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        size: "10-50",
        domain: "Gen-AI Mastery",
        message: "",
      });
    }, 800);
  };

  const triggerModal = () => {
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  return (
    <>
      <section id="cta" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* Gradient Banner */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 text-center shadow-2xl md:px-12 md:py-20">
            {/* Visual background accents */}
            <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
            <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl -z-10" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Transform Your Workforce Today
              </h2>
              <p className="text-lg text-blue-100 font-normal max-w-2xl leading-relaxed">
                Partner with Accredian to design next-gen capability development programs that close skill gaps, boost retention, and fuel innovation.
              </p>
              <div className="pt-4">
                <button
                  onClick={triggerModal}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer active:scale-95"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 animate-scale-up max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">
                {formSubmitted ? "Success" : "Enterprise Enquiry"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="overflow-y-auto p-6">
              {formSubmitted ? (
                <div className="flex flex-col items-center text-center py-8 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 p-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Thank you for reaching out. Our learning consultancy team will review your requirements and get in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                        Cohort Size
                      </label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                      >
                        <option value="10-50">10 - 50 employees</option>
                        <option value="51-200">51 - 200 employees</option>
                        <option value="201-500">201 - 500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Domain of Interest
                    </label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
                    >
                      <option value="Product & Innovation">Product & Innovation Hub</option>
                      <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                      <option value="Leadership Elevation">Leadership Elevation</option>
                      <option value="Tech & Data Insights">Tech & Data Insights</option>
                      <option value="Operations Excellence">Operations Excellence</option>
                      <option value="Digital Enterprise">Digital Enterprise</option>
                      <option value="Fintech Innovation">Fintech Innovation Lab</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Training Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your training goals..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-blue-700 transition-colors cursor-pointer active:scale-98"
                  >
                    <Send className="h-4 w-4" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
