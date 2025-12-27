"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cards = [
    {
      image: "/all_india_permit.jpg",
      tag: "All India Permit",
      title: "All India Permit routes covered.",
      subtitle:
        "Choose the right transport solution based on your load and safety needs.",
      desc: "All India Permit trucks for seamless interstate movement. Regular routes, reliable drivers and clear communication from pickup to delivery.",
      buttons: [
        {
          label: "Learn More",
          primary: true,
          className: "arrow-loop",
          href: "/services/all-india-permit",
        },
      ],
    },
    {
      image: "/part-load.jpg",
      tag: "Part Load (LTL)",
      title: "Part-load transport for smaller shipments.",
      desc: "Cost-effective transport for smaller consignments. We combine compatible loads so you pay only for the space you use, with safe delivery to your destination.",
      buttons: [
        {
          label: "Learn More",
          primary: true,
          className: "arrow-loop",
          href: "/services/part-load",
        },
      ],
    },
    {
      image: "/full_load.jpg",
      tag: "Full Truck Load (FTL)",
      title: "Full truck load for bigger moves.",
      desc: "Dedicated vehicles for your goods only. Ideal for bulk, urgent or high-value shipments that need faster, direct delivery across India.",
      buttons: [
        {
          label: "Learn More",
          primary: true,
          className: "arrow-loop",
          href: "/services/full-truck-load",
        },
      ],
    },
    {
      image: "/safe_load.jpg",
      tag: "Container & Closed Body",
      title: "Safe & Secure Transport Across All Services.",
      desc: "Containers and closed body trucks are used to ensure maximum protection for sensitive goods.",
      buttons: [
        {
          label: "Learn More",
          primary: true,
          className: "arrow-loop",
          href: "/services/container-trucks",
        },
      ],
    },
  ];

  return (
    <main className="relative">
      <section className="fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center z-0">
        <Image
          src="/truck_banner.jpg"
          alt="Home"
          fill
          priority
          className="object-contain w-full h-full"
        />

        {/* WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/80" />

        {/* TEXT CONTENT */}
        <div className="absolute z-20 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight secretWeapon">
            Welcome to SK Transport Services
          </h1>

          <p className="text-base md:text-lg mt-4 foundText leading-relaxed max-w-3xl mx-auto">
            We provide reliable, safe, and on-time transport solutions across
            India. From part-load to full-load services, our experienced team
            ensures smooth movement of goods with complete care and
            transparency.
          </p>

          <p className="text-base md:text-lg mt-3 secretWeapon">
            With All India Permit vehicles, we deliver your cargo —
            <span className="font-semibold">
              {" "}
              anywhere, anytime, without hassle.
            </span>
          </p>

          <Link
            href="#contact-form"
            className="arrow-loop inline-block bg-blue-700 hover:bg-blue-500 text-white py-2 px-10 rounded-full font-semibold transition duration-300 mt-6"
          >
            Let&apos;s chat!
          </Link>
        </div>
      </section>

      <div className="h-screen"></div>

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
            <h1 className="text-3xl md:text-5xl font-extrabold leading-normal secretWeapon mb-4">
              A reliable{" "}
              <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-blue-200 to-blue-600 inline-flex items-center">
                transport
              </span>{" "}
              &amp;{" "}
              <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-red-300 to-orange-600 inline-flex items-center">
                logistics
              </span>{" "}
              partner.
            </h1>

            <p className="text-lg md:text-xl mb-4 text-[#162b5a] semiBold">
              SK Transport Service delivers goods safely and on time across
              India with both part-load and full-load transport options.
            </p>

            <a
              href="/about"
              className="arrow-loop inline-block text-blue-600 rounded-full font-semibold transition duration-300"
            >
              Learn More
            </a>
          </div>

          <div className="text-center">
            <Image
              src="/truck- 2.jpg"
              alt="Services"
              width={600}
              height={450}
              className="rounded-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] py-24 relative z-30">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-blue-900 mb-10">
            Our Transport Services
          </h1>
          <p className="text-center text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 secretWeapon">
            The right truck for every load.
          </p>

          {/* ⭐ BUTTON TABS */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {cards.map((c, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  setSelectedIndex(index);
                }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all
                  ${
                    active === index
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-white text-blue-700 hover:bg-blue-100"
                  }`}
              >
                {c.title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="md:hidden relative overflow-hidden">
            <div
              key={active}
              className="bg-white rounded-3xl p-6 shadow-lg
                        transition-all duration-500 ease-in-out
                        opacity-100 translate-y-0"
              style={{
                animation: "fadeSlide 0.5s ease",
              }}
            >
              <Image
                src={cards[active].image}
                alt="Service"
                width={800}
                height={400}
                className="rounded-xl w-full h-auto object-cover animate-fade-slide"
              />

              <h4 className="text-teal-600 font-semibold mt-4 animate-fade-slide">
                {cards[active].tag}
              </h4>
              <h3 className="text-3xl font-extrabold text-blue-900 mt-2 animate-fade-slide">
                {cards[active].title}
              </h3>

              {cards[active].subtitle && (
                <p className="text-sm text-blue-600 mt-2 animate-fade-slide">
                  {cards[active].subtitle}
                </p>
              )}

              <p className="text-[#162b5a] mt-3 animate-fade-slide">
                {cards[active].desc}
              </p>

              <div className="flex gap-4 mt-4">
                {cards[active].buttons.map((btn, j) => (
                  <a
                    key={j}
                    className={`px-6 py-2 rounded-full font-semibold flex items-center gap-2 ${
                      btn.primary
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    {btn.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden max-w-6xl mx-auto px-4 hidden md:block">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${selectedIndex * 90}%)`,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="min-w-[90%] bg-white rounded-3xl p-10 mr-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex justify-center items-center h-[320px]">
                      <Image
                        src={card.image}
                        alt="Service"
                        width={800}
                        height={400}
                        className="rounded-xl max-h-full max-w-full object-contain animate-fade-slide"
                      />
                    </div>

                    <div className="flex flex-col justify-center text-left">
                      <h4 className="text-teal-600 font-semibold mb-2 animate-fade-slide">
                        {card.tag}
                      </h4>
                      <h3 className="text-3xl font-extrabold text-blue-900 mb-2 animate-fade-slide">
                        {card.title}
                      </h3>

                      {card.subtitle && (
                        <p className="text-sm text-blue-600 font-medium mb-4 animate-fade-slide">
                          {card.subtitle}
                        </p>
                      )}
                      <p className="text-[#162b5a] mb-6 animate-fade-slide">
                        {card.desc}
                      </p>

                      <div className="flex gap-4">
                        {card.buttons.map((btn, j) => (
                          <a
                            key={j}
                            className={`
                              px-6 py-2 rounded-full font-semibold flex items-center gap-2
                              ${
                                btn.primary
                                  ? "bg-blue-600 text-white hover:bg-blue-700"
                                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                              }
                              ${btn.className || ""}
                            `}
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
