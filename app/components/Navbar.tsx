"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServices, setDesktopServices] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const closeDropdown = () => setDesktopServices(false);
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-50 top-0 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* ========================== DESKTOP NAVBAR ========================== */}
        <div className="hidden md:flex w-full justify-center mt-6 px-4 relative">
          <div
            className="w-full max-w-[1200px] bg-white rounded-[152px] px-10 py-4 flex items-center justify-between"
            style={{
              boxShadow:
                "0 4px 20px rgba(194, 194, 194, 0.229), 0 2px 8px rgb(255, 255, 255)",
            }}
          >
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/Sk_transport_logo.png"
                alt="Logo"
                width={200}
                height={80}
                className="
                  w-[140px]        sm:w-[160px]
                  md:w-[180px]     lg:w-[210px]
                  h-auto
                "
                priority
              />
            </Link>

            <div className="flex items-center gap-12 relative">
              {/* NAV LINKS */}
              <nav className="flex gap-12 font-medium text-[#7894aa] items-center">
                <Link
                  href="/about"
                  className="
                    inline-block px-5 py-2.5 rounded-full
                    text-[#000000dc]
                    transition-all duration-300 ease-out
                    will-change-transform
                    hover:font-semibold
                    hover:scale-110
                  "
                >
                  About Us
                </Link>

                {/* SERVICES DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDesktopServices(!desktopServices);
                    }}
                    className="inline-block px-5 py-2.5 rounded-full
      text-[#000000dc] transition-all duration-300 ease-out
      hover:font-semibold hover:scale-110"
                  >
                    Services{" "}
                    <span className="text-sm">
                      {desktopServices ? "▲" : "▼"}
                    </span>
                  </button>

                  {desktopServices && (
                    <div
                      className="absolute left-0 top-[120%] w-72 bg-white rounded-2xl
                 shadow-lg p-5 space-y-4 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        href="/services/part-full-load"
                        onClick={() => setDesktopServices(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg
                   hover:bg-blue-50 transition"
                      >
                        <span className="text-xl">📦🚚</span>
                        <span className="text-slate-900 font-medium">
                          Part / Full Load Transport
                        </span>
                      </Link>

                      <Link
                        href="/services/open-closed-body"
                        onClick={() => setDesktopServices(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg
                   hover:bg-blue-50 transition"
                      >
                        <span className="text-xl">🛻🚛</span>
                        <span className="text-slate-900 font-medium">
                          Open / Closed Body Trucks
                        </span>
                      </Link>

                      <Link
                        href="/services/container-transport"
                        onClick={() => setDesktopServices(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg
                   hover:bg-blue-50 transition"
                      >
                        <span className="text-xl">📦🚢</span>
                        <span className="text-slate-900 font-medium">
                          Container Transport
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* <Link
                  className="inline-block px-5 py-2.5 rounded-full
                    text-[#000000dc]
                    transition-all duration-300 ease-out
                    will-change-transform
                    hover:font-semibold
                    hover:scale-110"
                  href="/posts"
                >
                  Insights
                </Link> */}
              </nav>

              {/* CONTACT BUTTON */}
              <a
                href="#contact-form"
                className="arrow-loop inline-block bg-blue-700 hover:bg-blue-500 text-white py-2 px-10 rounded-full font-semibold transition duration-300"
              >
                contact us
              </a>
            </div>
          </div>
        </div>

        {/* ========================== MOBILE NAVBAR ========================== */}
        <div className="md:hidden w-full flex justify-center mt-6 px-4">
          <div
            className="w-full max-w-[95%] bg-white rounded-[152px] px-6 py-4 flex justify-between items-center"
            style={{
              boxShadow:
                "0 4px 20px rgba(194, 194, 194, 0.229), 0 2px 8px rgb(255, 255, 255)",
            }}
          >
            <Link href="/">
              <Image
                src="/Sk_transport_logo.png"
                alt="Logo"
                width={200}
                height={80}
                className="
                  w-[140px]        sm:w-[160px]
                  md:w-[180px]     lg:w-[210px]
                  h-auto
                "
                priority
              />
            </Link>

            <button
              onClick={() => {
                setOpen(!open);
                setServicesOpen(false);
              }}
            >
              <Image
                src="/menu_bar.png"
                alt="menu"
                width={50}
                height={28}
                className="w-20 h-10"
              />
            </button>
          </div>
        </div>

        {/* ======================== MOBILE DROPDOWN ======================== */}
        {open && (
          <div className="md:hidden w-full flex justify-center mt-3 px-4">
            <div
              className="w-full max-w-[95%] bg-white rounded-[30px] px-6 py-4 text-[16px] font-medium text-[#7894aa]"
              style={{
                boxShadow:
                  "0 4px 20px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(59, 130, 246, 0.2)",
              }}
            >
              <Link href="/about" onClick={() => setOpen(false)}>
                <div className="py-3 bg-clip-text text-transparent bg-linear-to-r from-[#393939] to-[#393939]">
                  About Us
                </div>
              </Link>

              {/* MOBILE SERVICES */}
              <button
                className="w-full flex justify-between items-center py-3"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#393939] to-[#393939]">
                  Services
                </span>
                <span>{servicesOpen ? "▲" : "▼"}</span>
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-3 space-y-4 pb-3">
                  <Link
                    href="/services/part-full-load"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl">📦🚚</span>
                    <span className="text-slate-900 font-medium">
                      Part / Full Load Transport
                    </span>
                  </Link>

                  <Link
                    href="/services/open-closed-body"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl">🛻🚛</span>
                    <span className="text-slate-900 font-medium">
                      Open / Closed Body Trucks
                    </span>
                  </Link>

                  <Link
                    href="/services/container-transport"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xl">📦🚢</span>
                    <span className="text-slate-900 font-medium">
                      Container Transport
                    </span>
                  </Link>
                </div>
              )}

              {/* <Link href="/posts" onClick={() => setOpen(false)}>
                <div className="py-3 bg-clip-text text-transparent bg-linear-to-r from-[#393939] to-[#393939]">
                  Insights
                </div>
              </Link> */}

              <a
                href="#contact-form"
                className="arrow-loop inline-block bg-blue-700 hover:bg-blue-500 text-white py-2 px-10 rounded-full font-semibold transition duration-300"
              >
                contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
