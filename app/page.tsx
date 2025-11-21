"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [active, setActive] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cards = [
    {
      image: "/Ecommerce.webp",
      tag: "Storefronts & Maintenance",
      title: "Ecommerce solutions that sell.",
      desc: "High-performance Shopify & BigCommerce builds…",
      buttons: [
        { label: "Learn More", primary: true,  className: "arrow-loop" }],
    },
    {
      image: "/home-website.jpg",
      tag: "Websites",
      title: "Websites that stand out.",
      desc: "We build fast, scalable websites…",
      buttons: [{ label: "Explore", primary: true, className: "arrow-loop" }],
    },
    {
      image: "/web-apps-2.webp",
      tag: "Web Apps",
      title: "Apps that solve problems.",
      desc: "Custom dashboards & automation tools…",
      buttons: [{ label: "View Apps", primary: true, className: "arrow-loop" }],
    },
    {
      image: "/WEBP_UIUX-service.webp",
      tag: "Design",
      title: "Modern UI/UX that converts.",
      desc: "Human-centered design systems…",
      buttons: [{ label: "See Designs", primary: true, className: "arrow-loop" }],
    },
  ];
  return (
    <main className="relative">
      <section className="fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center z-0">
        {/* FULL SCREEN BACKGROUND IMAGE */}
        <Image
          src="/home-1.png"
          alt="Home"
          fill
          priority
          className="object-cover w-full h-full"
        />

        {/* WHITE OVERLAY (ADJUSTABLE) */}
        <div className="absolute inset-0 bg-white/70" />

        {/* TEXT CONTENT */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight secretWeapon">
            You’ve found your digital{" "}
            <span className="bg-red-400 px-2 rounded-lg text-white">secret weapon.</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 font-semibold text-gray-700">
            <span className="foundText block">
              Small by choice. Small by choice. Sharp by design.
            </span>

            <span className="greyGradient block mt-2">
              We build websites and apps,
            </span>

            <span className="secretWeapon block">
              with real UX thinking baked in.
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
            <h1 className="text-4xl md:text-5xl font-extrabold leading-normal text-blue-900 mb-4 secretWeapon">
              A modern{" "}
              <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-blue-200 to-blue-600 inline-flex items-center">
                design
              </span>{" "}
              &amp;{" "}
              <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-red-300 to-orange-600 inline-flex items-center">
                development
              </span>{" "}
              partner.
            </h1>

            <p className="text-lg md:text-xl text-blue-600 mb-4 semiBold">
              Otterdev partners with brands in Singapore, New York, and Australia to build scalable websites,
              ecommerce platforms, and apps powered by headless CMS like Sanity, Strapi, and frameworks such as
              Next.js and Astro.
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
              src="/home-2.jpg"
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
            Our Services
          </h1>
          <p className="text-center text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 secretWeapon">
            Where hard work gets done.
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
                  ${active === index
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
                animation: "fadeSlide 0.5s ease"
              }}
            >
              <Image
                src={cards[active].image}
                alt="Service"
                width={800}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />

              <h4 className="text-teal-600 font-semibold mt-4">{cards[active].tag}</h4>
              <h3 className="text-3xl font-extrabold text-blue-900 mt-2">
                {cards[active].title}
              </h3>
              <p className="text-blue-800 mt-3">{cards[active].desc}</p>

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
                    <div className="flex justify-center items-center h-full">
                      <Image
                        src={card.image}
                        alt="Service"
                        width={800}
                        height={400}
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center text-left">
                      <h4 className="text-teal-600 font-semibold mb-2">{card.tag}</h4>
                      <h3 className="text-3xl font-extrabold text-blue-900 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-blue-800 mb-6">{card.desc}</p>

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

      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30 overflow-visible">
        <div className="max-w-6xl mx-auto px-4 overflow-visible">

          {/* Title */}
          <div className="text-center mb-16">
            <p className="text-blue-500 font-semibold text-lg">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 secretWeapon">
              Brands we have{" "}
              <span className="bg-[#fac5a9eb] px-2 rounded-lg  text-white">impacted.</span>
            </h2>
          </div>

          <div className="relative overflow-visible">
            <div className="overflow-visible pb-8">
              <div
                className="
                  flex gap-10 overflow-x-auto overflow-y-visible
                  scroll-smooth snap-x snap-mandatory
                  no-scrollbar py-5
                "
              >
                {[
                  {
                    title: "Redsbaby – Launching International Ecommerce",
                    tags: ["Case Study", "Sanity CMS", "E-Commerce"],
                    img: "/Ecommerce.webp",
                    bgClass: "bg-[#e6f2fb]"
                  },
                  {
                    title: "Migrating Ciberspring from WordPress to Sanity",
                    tags: ["Corporate Website", "Case Study"],
                    img: "/Brand Websites.webp",
                    bgClass: "bg-[#fff3eb]"
                  },
                  {
                    title: "Empowering Moom with Shopify Rebuild",
                    tags: ["Web Apps", "E-Commerce"],
                    img: "/web-apps-2.webp",
                    bgClass: "bg-[#f3ecff]"
                  },
                  {
                    title: "Transforming Hospital Experience using NextJS",
                    tags: ["Sanity CMS", "Case Study"],
                    img: "/WEBP_UIUX-service.webp",
                    bgClass: "bg-[#eef6ff]"
                  },
                ].map((item, index) => (
                  <article
                    key={index}
                    className={`
                      min-w-[300px] md:min-w-[360px] 
                      ${item.bgClass} border border-blue-100 rounded-3xl  
                      p-6 snap-start
                      transition-all duration-300
                      hover:-translate-y-4 hover:shadow-[0px_30px_60px_rgba(16,24,40,0.12)]
                      relative hover:z-40
                    `}
                  >
                    <h3 className="text-blue-900 text-xl font-bold mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-blue-700 rounded-full text-xs border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="relative rounded-xl overflow-hidden mb-4">
                      <Image
                        src={item.img}
                        width={700}
                        height={420}
                        alt={`case ${index}`}
                        className="w-full h-auto object-cover block"
                      />
                    </div>

                    <a className="arrow-loop flex items-center text-blue-600 font-semibold mt-3 cursor-pointer">
                      Read More
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
