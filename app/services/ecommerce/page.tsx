"use client";

import Image from "next/image";

export default function EcommercePage() {
  return (
    <main className="relative bg-white">
      {/* ⭐ HERO SECTION */}
      <section className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-35 z-1">
        <div className="text-center px-4 max-w-7xl mx-auto z-20">
          <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
            <h6 className="text-lg font-semibold secretWeapon">
              Ecommerce
            </h6>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold secretWeapon leading-tight">
            Your store, your{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-[#bcacd7] to-[#7c9cfc] inline-block">
              success.
            </span>
          </h1>

          <p className="text-lg md:text-xl mt-4 foundText font-semibold">
            Evidence based ecommerce solutions provided by modern tech partners.
          </p>
        </div>

        <div className="relative w-full flex justify-center z-10">
          <Image
            src="/About Us Hero.webp"
            alt="Post illustration"
            width={2000}
            height={1000}
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

      <section className="bg-white relative z-30 pt-0">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-normal secretWeapon mb-4">
              <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-blue-100 to-blue-400 inline-flex items-center">
                Shop-worthy
              </span>{" "}
              from the start.
            </h1>

            <p className="text-lg md:text-xl text-blue-600 mb-4">
              We empower small and medium-sized ecommerce businesses to thrive online. Our practical, high-performance strategies, focused on platforms like Shopify Plus, Shopify, BigCommerce, and WooCommerce, drive sales without unnecessary complexity.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/WEBP_homepage 2_ZtpDma.webp"
              alt="Services"
              width={600}
              height={450}
              className="rounded-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ⭐ OTTERDEV STYLE LOGO SLIDER */}
      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30"></section>
    </main>
  );
}
