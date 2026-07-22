# Accredian Enterprise Landing Page

A modern, highly responsive capability development and enterprise upskilling landing page built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. 

This application replicates the layout, aesthetics, and user flows of Accredian Enterprise (`enterprise.accredian.com`) using custom assets, accessible structures, and micro-animations.

---

## 🚀 Key Features

*   **Responsive & Sticky Header**: Navigation highlights links dynamically as you scroll through different sections (Scroll-Spy) and includes a responsive mobile hamburger drawer.
*   **Dual-Layout Timeline (Accredian Edge)**: Interactive horizontal roadmap on desktop (clickable nodes update the display cards below) and a vertical accordion layout on mobile devices.
*   **Lead Capture & Enquiry Form**: An overlay modal form accessible from multiple CTA buttons (Hero, Navbar, Banner) featuring input validation, animated state transitions, and a success confirmation badge.
*   **Domain Expertise Grid**: Displays 7 domain specialization sections in a 3-column layout where the last card dynamically centers itself on larger viewports.
*   **Visual Course Segmentation**: Cards mapped with custom CSS gradients and icon sets to represent Program, Industry, Topic, and Level specializations.
*   **The CAT Framework**: Wavy S-connector SVG flow representing *Concept*, *Application*, and *Tools* on desktop, switching to an active numbered progress list on mobile.
*   **FAQ Category System**: Interactive side tabs on desktop (About Course, About Delivery, Miscellaneous) that update the right accordion list on click, reflowing to a horizontal scroll layout on mobile.

---

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (via Next.js Font Optimization)

---

## 📂 Code Structure

```bash
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css      # Custom animations, scroll behavior, & Tailwind setup
│   ├── layout.tsx       # Inter font setup and SEO metadata tags
│   └── page.tsx         # Page orchestrator assembling all sections
└── components/
    ├── Navbar.tsx       # Sticky navigation, mobile hamburger & active link highlighting
    ├── Hero.tsx         # Left headings & bullets with custom corporate graphic
    ├── Stats.tsx        # Success metrics cards
    ├── Partners.tsx     # Partner logo strip (Reliance, HCL, IBM, CRIS, ADP, Bayer)
    ├── EdgeTimeline.tsx # Alternating milestone timelines
    ├── DomainGrid.tsx   # Specialization cards matching reference layout
    ├── CourseCards.tsx  # Interactive visual segmentations
    ├── Audience.tsx     # Blue strategic upskilling banner with custom illustration
    ├── CATFramework.tsx # Concept-Application-Tools wave connector
    ├── DeliveryCards.tsx# Operational workflow cards
    ├── FAQ.tsx          # Multi-tab accordion question modules
    ├── Testimonials.tsx # Pagination-dotted client reviews carousel
    ├── CTA.tsx          # Gradient banner housing the overlay Lead enquiry form
    └── Footer.tsx       # Contact coordinates, links, and branding details
```

---

## ⚙️ Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or later) installed on your machine.

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/parvezs2442/accredian-clone.git
cd accredian-clone
npm install
```

### 3. Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Build & Production Deployment

Compile and build the application for optimized production hosting:

```bash
npm run build
```

This compiles TS/React components using the Turbopack compiler, outputting static route optimizations. Start the production build locally:

```bash
npm run start
```
