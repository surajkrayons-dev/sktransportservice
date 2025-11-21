"use client";

import { useState } from "react";
import Image from "next/image";
import { posts } from "./postsData";

export default function PostPage() {
  const tabs = ["All Posts", "Blog Posts", "Case Studies"];
  const [active, setActive] = useState("All Posts");
  const [visible, setVisible] = useState(6);
  const [showFilter, setShowFilter] = useState(false);

  const filtered =
    active === "All Posts"
      ? posts
      : active === "Blog Posts"
      ? posts.filter((p) => p.category === "Blog")
      : posts.filter((p) => p.category === "Case Study");
  return (
    <main className="relative bg-white">

      {/* ⭐ HERO SECTION */}
      <section className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-35 z-1">
        <div className="text-center px-4 max-w-7xl mx-auto z-20">
          <h6 className="text-lg font-semibold bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-block">
            Insights
          </h6>

          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Insights and success{" "}
            <span className="px-2 py-1 rounded-lg text-white font-bold bg-linear-to-r from-[#ffb5b5] to-[#975b61] inline-block">
              stories.
            </span>
          </h1>

          <p className="text-lg md:text-xl mt-4 text-blue-500 font-semibold">
            We stay lean to move fast, stay hands-on, and build platforms that deliver real value.
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

      {/* ⭐ OTTERDEV STYLE LOGO SLIDER */}
      <section className="bg-linear-to-t from-[#eef6ff] via-white to-white py-24 relative z-30">
        {/* Tabs */}
        <div className="md:hidden flex justify-center mb-6 px-4">
          <button
            onClick={() => setShowFilter(true)}
            className="w-full max-w-xs flex items-center justify-between px-4 py-3 bg-white rounded-full border text-blue-700 font-semibold shadow"
          >
            {active}
            <span>▼</span>
          </button>
        </div>

        <div className="hidden md:flex justify-center mb-14 px-4 md:px-0">
          <div className="bg-[#eef6ff] px-3 py-2 rounded-full flex items-center gap-4">
            {tabs.map((t) => {
              const isActive = active === t;

              const count =
                t === "All Posts"
                  ? posts.length
                  : t === "Blog Posts"
                  ? posts.filter((p) => p.category === "Blog").length
                  : posts.filter((p) => p.category === "Case Study").length;

              return (
                <button
                  key={t}
                  onClick={() => {
                    setActive(t);
                    setVisible(6);
                  }}
                  className={`
                    relative flex items-center gap-2 px-6 py-2 rounded-full font-semibold
                    ${isActive
                      ? "bg-white text-[#0b4bff] shadow-[0_10px_25px_rgba(0,123,255,0.35)]"
                      : "text-blue-700"}
                  `}
                >
                  {t}
                  <span className="text-sm px-2 py-0.5 rounded-full font-bold bg-[#0b4bff] text-white">
                    {count}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-3 left-0 right-0 h-4 blur-xl bg-blue-300 opacity-60 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {showFilter && (
          <div className="fixed inset-0 bg-black/40 z-999 flex items-center justify-center px-4">
            <div className="bg-white rounded-3xl p-5 w-full max-w-sm relative shadow-xl animate-fadeIn">
              {/* Title Row */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Filters</h3>
                <button onClick={() => setShowFilter(false)} className="text-xl font-bold">
                  ✕
                </button>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-4">
                {tabs.map((t) => {
                  const count =
                    t === "All Posts"
                      ? posts.length
                      : t === "Blog Posts"
                      ? posts.filter((p) => p.category === "Blog").length
                      : posts.filter((p) => p.category === "Case Study").length;

                  return (
                    <label
                      key={t}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="filter"
                          checked={active === t}
                          onChange={() => {
                            setActive(t);
                            setVisible(6);
                            setShowFilter(false);
                          }}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span className="font-medium text-blue-700">{t}</span>
                      </div>

                      <span className="text-sm px-2 py-0.5 rounded-full font-bold bg-[#0b4bff] text-white">
                        {count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {filtered.slice(0, visible).map((post) => (
            <div
              key={post.id}
              className="relative rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border transition hover:shadow-xl"
            >
              {/* IMAGE BACKGROUND */}
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={600}
                className="w-full h-[420px] object-cover"
              />

              {/* OVERLAY WHITE GRADIENT (BOTTOM FADE) */}
              <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-linear-to-t from-white via-white/30 to-transparent pointer-events-none" />

              {/* CONTENT ON TOP OF IMAGE */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">

                {/* TITLE + TAGS */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 leading-snug mb-3 drop-shadow-sm">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-blue-700 text-sm border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* READ MORE */}
                <div className="text-blue-700 font-semibold cursor-pointer">
                  Read More →
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Load More */}
        {visible < filtered.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible(visible + 6)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </section>

    </main>
  );
}

