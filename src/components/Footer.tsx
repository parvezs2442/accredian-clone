"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Youtube, Facebook, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-gray-400 border-t border-slate-800">
      
      {/* Top Footer Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="flex flex-col space-y-6">
          <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex flex-col select-none">
            <span className="text-2xl font-black tracking-tight text-white">
              accredian
            </span>
            <span className="text-[10px] -mt-1 font-medium tracking-widest text-blue-400 uppercase">
              credentials that matter
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-gray-400">
            Accredian helps enterprises build future-ready workforces through high-impact, customizable capability development programs.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Linkedin, url: "https://linkedin.com" },
              { icon: Twitter, url: "https://twitter.com" },
              { icon: Youtube, url: "https://youtube.com" },
              { icon: Facebook, url: "https://facebook.com" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "Stats & Metrics", href: "#stats" },
              { label: "Our Partners", href: "#clients" },
              { label: "Accredian Edge", href: "#edge" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-blue-400 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
            Framework & FAQs
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "CAT Framework", href: "#cat" },
              { label: "How We Deliver", href: "#how-it-works" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "FAQs", href: "#faqs" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-blue-400 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white text-sm font-extrabold uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start space-x-3 text-gray-400">
              <Mail className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <a
                href="mailto:enterprise@accredian.com"
                className="hover:text-blue-400 transition-colors"
              >
                enterprise@accredian.com
              </a>
            </li>
            <li className="flex items-start space-x-3 text-gray-400 leading-relaxed">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
              <span>
                1st Floor, Corporate Tower B,<br />
                DLF CyberCity, Phase 3,<br />
                Gurugram, Haryana - 122002
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center md:text-left">
          <span>
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
