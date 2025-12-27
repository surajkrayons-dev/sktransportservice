"use client";

// import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative bg-white">
      {/* ⭐ HERO SECTION */}
      <section className="fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center z-0">
        {/* IMAGE WRAPPER */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-16 md:translate-y-15">
          <Image
            src="/about_us.jpg"
            alt="About"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="absolute z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight secretWeapon">
            Reliable transport for{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-[#ffddbe] to-[#a35b1d] inline-block">
              every load
            </span>
          </h1>

          <p className="text-2xl md:text-4xl mt-4 text-blue-500 font-semibold">
            <span className="foundText">
              From part load to full load transportation,
              <br />
            </span>
            <span className="greyGradient">
              we move your goods safely and on time,
              <br />
            </span>
            <span className="secretWeapon">
              across cities and states in India.
            </span>
          </p>
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-relaxed mb-6 secretWeapon">
            A reliable{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-blue-300 to-blue-600 inline-block">
              transport & logistics
            </span>{" "}
            partner you can trust.
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed text-[#162b5a]">
            Welcome to <strong>SK Transport Service</strong>, a trusted name in
            road transportation and logistics across India. Founded by
            <strong> Mr. Satender Kumar</strong>, we have been actively serving
            businesses and individuals since <strong>1990</strong>.
            <br />
            <br />
            With over three decades of hands-on experience in the transport
            industry, we specialize in safe, reliable, and on-time delivery of
            goods through part-load and full-load transport solutions. Our
            commitment is simple — move your goods efficiently, securely, and
            without delay.
          </p>

          <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed text-[#162b5a]">
            From local routes to long-distance interstate transportation, our
            All India Permit trucks operate across cities and states with
            complete compliance and professionalism. We work as a logistics
            partner, not just a transporter, ensuring transparency, reliability,
            and long-term relationships with our clients.
          </p>

          <Image
            src="/aboutme.jpg"
            alt="Services"
            width={1800}
            height={1000}
            priority
            className="rounded-2xl w-full max-w-6xl h-auto"
          />
        </div>
      </section>

      {/* ⭐ Why Choose SECTION */}
      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-10 secretWeapon">
            Why Choose SK Transport Service
          </h1>

          {/* INTRO LINE */}
          <p className="text-lg md:text-xl text-[#162b5a] max-w-3xl mx-auto leading-relaxed mb-14">
            With decades of experience and a strong operational network, we
            deliver transport solutions that businesses trust for safety,
            reliability, and timely delivery.
          </p>

          {/* IMAGE – SMALLER & CENTERED */}
          <div className="flex justify-center mb-10">
            <Image
              src="/why-choose.jpg"
              alt="Why Choose SK Transport Service"
              width={600}
              height={250}
              className="rounded-xl w-full max-w-2xl h-auto"
              priority
            />
          </div>

          {/* POINTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                1. Experience Since 1990
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                With over 30+ years in the transport industry, we understand
                routes, regulations, and real-world logistics challenges better
                than anyone else.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                2. Safe & On-Time Delivery
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                Your goods are handled with care and delivered on schedule,
                ensuring peace of mind for every shipment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                3. Part Load & Full Load Options
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                We offer flexible transport solutions — whether you need
                part-load sharing or dedicated full-load trucks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                4. All India Permit Trucks
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                Our fleet operates across states with valid permits, allowing
                seamless interstate transportation without delays.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                5. Transparent Communication
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                We keep our clients informed at every stage — from pickup to
                final delivery — with clear and honest communication.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                6. Long-Term Business Partnerships
              </h3>
              <p className="text-[#162b5a] leading-relaxed">
                We don’t just transport goods — we build long-term relationships
                based on trust, reliability, and consistent service quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
