"use client";

import { useState } from "react";
import Image from "next/image";

export default function WebAppsPage() {
  const [activeTab, setActiveTab] = useState("enterprise");

  /* ------------------------------------
     LOGO LISTS (Replace logo paths here)
  ------------------------------------ */

  const enterpriseLogos = [
    "/redAntler-Logo.webp",
    "/figma.webp",
    "/HP-Logo-Black.webp",
    "/mediatek.webp",
    "/Tsmc 1.webp",
    "/Singapore-Art Museum Logo-Full-Color.webp",
    "/Ktm-1.svg",
    "/AWWA-blavk-Colour-Logo.webp",
    "/ciberspring-logo-big 1.webp",
    "/RSH-Logo-Full-Color.webp",
  ];

  const startupLogos = [
    "/MMC-Logo-Full-Color.svg",
    "/Hoffman Agency Logo.webp",
    "/evident-logo_black_blue.webp",
    "/mediatek.webp",
    "/Tsmc 1.webp",
    "/Singapore-Art Museum Logo-Full-Color.webp",
    "/Ktm-1.svg",
    "/AWWA-blavk-Colour-Logo.webp",
    "/ciberspring-logo-big 1.webp",
    "/RSH-Logo-Full-Color.webp",
    "/MMC-Logo-Full-Color.svg",
    "/Hoffman Agency Logo.webp",
    "/evident-logo_black_blue.webp",
  ];

  return (
    <main className="relative bg-white">

      {/* ⭐ HERO SECTION */}
      <section className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-40 z-1">
        <div className="text-center px-4 max-w-4xl mx-auto z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Staying small, thinking{" "}
            <span className="bg-pink-200 px-2 rounded-lg">big.</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 text-blue-500 font-semibold">
            We stay lean to move fast, stay hands-on, and build platforms that deliver real value.
          </p>
        </div>

        <div className="relative w-full flex justify-center mt-5 z-10">
          <Image
            src="/About Us Hero.webp"
            alt="About illustration"
            width={2000}
            height={1200}
            priority
            className="w-[85%] max-w-5xl h-auto pointer-events-none"
          />
        </div>
      </section>

      {/* Spacer for hero reveal */}
      <div className="h-screen"></div>

      {/* ⭐ CURVED DROP SHADOW SHAPE */}
      <div className="relative w-full z-20 pointer-events-none mb-0 overflow-visible">
        <svg className="block w-full" viewBox="0 0 1920 260">
          <defs>
            <filter id="uShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="0" dy="-6" />
              <feGaussianBlur stdDeviation="22" />
              <feColorMatrix
                type="matrix"
                values="
                  0 0 0 0 0.1
                  0 0 0 0 0.1
                  0 0 0 0 0.2
                  0 0 0 0.35 0
                "
              />
            </filter>
          </defs>

          <path
            d="M0 40 L0 260 L1920 260 L1920 40 Q1400 150 960 150 Q520 150 0 40"
            fill="white"
            filter="url(#uShadow)"
          />

          <path
            d="M0 40 L0 260 L1920 260 L1920 40 Q1400 150 960 150 Q520 150 0 40"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ⭐ INTRO SECTION */}
      <section className="bg-white relative z-30">
        <div className="max-w-6xl mx-auto px-4 py-0 flex flex-col items-center text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-relaxed mb-6">
            We merge business{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-blue-200 to-blue-600 inline-block">
              vision,
            </span>{" "}
            tech precision, and user{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-red-300 to-orange-600 inline-block">
              understanding
            </span>{" "}
            to build{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-[#ffddbe] to-[#a35b1d] inline-block">
              impactful digital
            </span>{" "}
            platforms.
          </h1>

          <p className="text-lg md:text-xl text-blue-600 mb-6 max-w-3xl leading-relaxed">
            Krayons groups with brands in Singapore, New York, and Australia to build scalable websites,
            ecommerce platforms, and apps powered by headless CMS like Sanity, Strapi, and frameworks such as
            Next.js and Astro.
          </p>

          <Image
            src="/about-us 2.webp"
            alt="Services"
            width={1800}
            height={1000}
            priority
            className="rounded-2xl w-full max-w-6xl h-auto"
          />
        </div>
      </section>

      {/* ⭐ PHILOSOPHY SECTION */}
      <section className="bg-white py-24 relative z-30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h5 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-10">Our Philosophy</h5>
          <p className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10">
            Our Strategic Approach
          </p>

          <Image
            src="/about-us-3.webp"
            alt="Services"
            width={1800}
            height={1000}
            priority
            className="rounded-2xl w-full max-w-6xl h-auto"
          />

          <p className="text-lg md:text-xl text-blue-600 mt-10 max-w-3xl mx-auto leading-relaxed">
            We believe that all business solutions must fulfill the criteria of our DVF framework, ensuring they are both effective and aligned with our core values.
          </p>
        </div>
      </section>

      {/* ⭐ OTTERDEV STYLE LOGO SLIDER */}
      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30">
        <div className="w-full flex justify-center">
          <div className="max-w-6xl mx-auto px-4">

            {/* Title */}
            <div className="text-center mb-10">
              <p className="text-blue-500 font-semibold text-lg">We Work With Everyone, Big and Small</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                Building brands through brilliant digital.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10">
              <div className="flex bg-blue-50 p-2 rounded-full shadow-sm">
                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    activeTab === "enterprise" ? "bg-white shadow text-blue-700" : "text-blue-400"
                  }`}
                  onClick={() => setActiveTab("enterprise")}
                >
                  Enterprise
                </button>

                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    activeTab === "startup" ? "bg-white shadow text-blue-700" : "text-blue-400"
                  }`}
                  onClick={() => setActiveTab("startup")}
                >
                  Startup / SMEs
                </button>
              </div>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform:
                    activeTab === "enterprise" ? "translateX(0%)" : "translateX(-100%)",
                }}
              >
                {/* Enterprise logo grid */}
                <div className="min-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 place-items-center">
                  {enterpriseLogos.map((logo, index) => (
                    <LogoCard key={index} logo={logo} />
                  ))}
                </div>

                {/* Startup logo grid */}
                <div className="min-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 place-items-center">
                  {startupLogos.map((logo, index) => (
                    <LogoCard key={index} logo={logo} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

/* ⭐ LOGO CARD COMPONENT */
function LogoCard({ logo }: { logo: string }) {
  return (
    <div className="border border-blue-100 bg-white rounded-2xl p-6 flex items-center justify-center hover:shadow-lg transition-all h-[120px]">
      <Image
        src={logo}
        width={140}
        height={80}
        className="object-contain"
        alt="brand logo"
      />
    </div>
  );
}

