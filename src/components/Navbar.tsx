"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section for underline highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of NAV_ITEMS) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex flex-col select-none">
          <span className="text-2xl font-black tracking-tight text-blue-600">
            accredian
          </span>
          <span className="text-[10px] -mt-1 font-medium tracking-widest text-gray-500 uppercase">
            credentials that matter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const targetId = item.href.substring(1);
            const isActive = activeSection === targetId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative text-[15px] font-semibold transition-colors duration-200 py-2 hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-600 transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex p-2 text-gray-700 hover:text-blue-600 lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-b border-gray-200 bg-white px-6 py-4 lg:hidden animate-fade-in">
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-base font-semibold py-2 transition-colors ${
                    isActive ? "text-blue-600 pl-2 border-l-4 border-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
