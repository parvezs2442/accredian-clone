import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import EdgeTimeline from "@/components/EdgeTimeline";
import DomainGrid from "@/components/DomainGrid";
import CourseCards from "@/components/CourseCards";
import Audience from "@/components/Audience";
import CATFramework from "@/components/CATFramework";
import DeliveryCards from "@/components/DeliveryCards";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Partners />
        <EdgeTimeline />
        <DomainGrid />
        <CourseCards />
        <Audience />
        <CATFramework />
        <DeliveryCards />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
