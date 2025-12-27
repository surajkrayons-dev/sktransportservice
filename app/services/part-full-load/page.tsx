"use client";

import Image from "next/image";

export default function PartFullLoadPage() {
  return (
    <main className="relative bg-white">
      {/* ⭐ HERO SECTION */}
      <section className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-35 z-1">
        <div className="text-center px-4 max-w-7xl mx-auto z-20">
          <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
            <h6 className="text-lg font-semibold secretWeapon">Ecommerce</h6>
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
              We empower small and medium-sized ecommerce businesses to thrive
              online. Our practical, high-performance strategies, focused on
              platforms like Shopify Plus, Shopify, BigCommerce, and
              WooCommerce, drive sales without unnecessary complexity.
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

      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 secretWeapon">
            We want users to{" "}
            <span className="px-3 py-1 rounded-xl text-blue-900 font-bold bg-[#bfe3ff]">
              love your store.
            </span>
          </h2>
        </div>

        <div className="relative lg:h-[200vh] h-auto">
          <div className="lg:sticky lg:top-24">
            {/* Card 1 */}
            <div className="max-w-7xl mx-auto mt-14 bg-white rounded-3xl p-10 shadow-[0px_25px_80px_rgba(135,175,255,0.45)]">
              {/* STORE TAG */}
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-white font-semibold bg-[#1cd4d4]">
                Storefront Setup
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10">
                Fast, efficient, and sure to convert.
              </h3>

              {/* 4 Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* CARD 1 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f3ff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/book.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    User-Focused Design
                  </h4>

                  <p className="text-blue-700 mt-2">
                    We’ll design intuitive and engaging shopping experiences
                    that guide customers seamlessly through your store.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f0ff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/chart.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Optimised for Conversion
                  </h4>

                  <p className="text-blue-700 mt-2">
                    We focus on creating high-performance product pages,
                    checkout flows, and navigation that drive sales.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#ffefef] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/mobile.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Mobile-First Approach
                  </h4>

                  <p className="text-blue-700 mt-2">
                    We ensure your ecommerce site delivers a flawless experience
                    on all devices, especially mobile.
                  </p>
                </div>

                {/* CARD 4 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#f1f0ff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/gear.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    SEO & Performance
                  </h4>

                  <p className="text-blue-700 mt-2">
                    We build SEO-friendly ecommerce platforms that load quickly
                    and rank well in search results, attracting and retaining
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[200vh] h-auto lg:mt-[-100vh] mt-0">
          <div className="lg:sticky lg:top-24 lg:z-20">
            {/* Card 2 */}
            <div className="max-w-7xl mx-auto mt-14 bg-white rounded-3xl p-10 shadow-[0px_25px_80px_rgba(135,175,255,0.45)]">
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-white font-semibold bg-[#b8a6ff]">
                Maintenance
              </span>

              <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10">
                Ensure Peak Performance.
              </h3>

              {/* 4 CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* CARD 1 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#f1eaff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/update.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Platform & Plugin Updates
                  </h4>

                  <p className="text-blue-700 mt-2">
                    Regular updates for your ecommerce platform and plugins to
                    ensure compatibility and security.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#f4e8ff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/performance.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Performance Monitoring
                  </h4>

                  <p className="text-blue-700 mt-2">
                    Continuous monitoring to ensure fast loading times and
                    smooth user experience.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#eef2ff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/support.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Expert Support
                  </h4>

                  <p className="text-blue-700 mt-2">
                    Dedicated support for troubleshooting issues and providing
                    technical help when needed.
                  </p>
                </div>

                {/* CARD 4 */}
                <div className="p-6 bg-white border border-[#d6e6ff] rounded-2xl shadow-[0_10px_40px_rgba(135,175,255,0.35)]">
                  <div className="w-12 h-12 rounded-xl bg-[#efeaff] flex items-center justify-center mb-4">
                    <Image
                      src="/icons/integration.png"
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-blue-900">
                    Third Party Integrations
                  </h4>

                  <p className="text-blue-700 mt-2">
                    Evaluation and vetting of plugins to ensure performance and
                    compatibility with your platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-9 foundText">
            Need something different?
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 secretWeapon">
            What can we help you with?
          </h2>
        </div>
      </section>
    </main>
  );
}
