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
                "0 4px 20px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(59, 130, 246, 0.2)",
            }}
          >
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/krayons.png"
                alt="Logo"
                width={150}
                height={50}
                className="w-[150px] h-auto"
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
                    text-[#FF7A7A]

                    transition-all duration-300 ease-out
                    will-change-transform

                    hover:text-transparent
                    hover:bg-clip-text
                    hover:bg-linear-to-r
                    hover:from-[#FF7A7A]
                    hover:via-[#C084FC]
                    hover:to-[#60A5FA]

                    hover:font-semibold
                    hover:scale-110
                  "
                >
                  About Us
                </Link>

                {/* SERVICES DROPDOWN */}
                <div
                  className="relative"
                >
                  <button
                    className="inline-block px-5 py-2.5 rounded-full
                    text-[#FF7A7A]

                    transition-all duration-300 ease-out
                    will-change-transform

                    hover:text-transparent
                    hover:bg-clip-text
                    hover:bg-linear-to-r
                    hover:from-[#FF7A7A]
                    hover:via-[#C084FC]
                    hover:to-[#60A5FA]

                    hover:font-semibold
                    hover:scale-110"
                    onClick={() => setDesktopServices(!desktopServices)}
                  >
                    Services <span className="text-sm">▼</span>
                  </button>

                  {desktopServices && (
                    <div className="absolute left-0 top-[120%] w-60 bg-white rounded-2xl shadow-lg p-4 space-y-4 z-50">
                      <Link
                        href="/services/ecommerce"
                        className="flex items-center gap-3 hover:opacity-70"
                      >
                        <span className="text-blue-500 text-xl">🛒</span>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ff8153] to-[#4a03fcbe]">
                          Ecommerce
                        </span>
                      </Link>

                      <Link
                        href="/services/websites"
                        className="flex items-center gap-3 hover:opacity-70"
                      >
                        <span className="text-red-500 text-xl">🏢</span>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ff8153] to-[#4a03fcbe]">
                          Websites
                        </span>
                      </Link>

                      <Link
                        href="/services/web-apps"
                        className="flex items-center gap-3 hover:opacity-70"
                      >
                        <span className="text-pink-500 text-xl">📱</span>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ff8153] to-[#4a03fcbe]">
                          Web Apps
                        </span>
                      </Link>

                      <Link
                        href="/services/ui-ux"
                        className="flex items-center gap-3 hover:opacity-70"
                      >
                        <span className="text-yellow-500 text-xl">✏️</span>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ff8153] to-[#4a03fcbe]">
                          UI/UX Design
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  className="inline-block px-5 py-2.5 rounded-full
                    text-[#FF7A7A]

                    transition-all duration-300 ease-out
                    will-change-transform

                    hover:text-transparent
                    hover:bg-clip-text
                    hover:bg-linear-to-r
                    hover:from-[#FF7A7A]
                    hover:via-[#C084FC]
                    hover:to-[#60A5FA]

                    hover:font-semibold
                    hover:scale-110"
                  href="/posts"
                >
                  Insights
                </Link>
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
                "0 4px 20px rgba(59, 130, 246, 0.3), 0 2px 8px rgba(59, 130, 246, 0.2)",
            }}
          >
            <Link href="/">
              <Image
                src="/krayons.png"
                alt="Logo"
                width={120}
                height={40}
                className="w-[120px] h-auto"
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
                src="/hamburger.svg"
                alt="menu"
                width={28}
                height={28}
                className="w-7 h-7"
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
                <div className="py-3 bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#1949ab]">
                  About Us
                </div>
              </Link>

              {/* MOBILE SERVICES */}
              <button
                className="w-full flex justify-between items-center py-3"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#e66c6c]">
                  Services
                </span>
                <span>{servicesOpen ? "▲" : "▼"}</span>
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-3 pb-3">
                  <Link
                    href="/services/ecommerce"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-blue-500 text-xl">🛒</span>
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#e66c6c]">
                      Ecommerce
                    </span>
                  </Link>

                  <Link
                    href="/services/websites"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-red-500 text-xl">🏢</span>
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#e66c6c]">
                      Websites
                    </span>
                  </Link>

                  <Link
                    href="/services/web-apps"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-pink-500 text-xl">📱</span>
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#e66c6c]">
                      Web Apps
                    </span>
                  </Link>

                  <Link
                    href="/services/ui-ux"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <span className="text-yellow-500 text-xl">✏️</span> 
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#e66c6c]">
                      UI/UX Design
                    </span>
                  </Link>
                </div>
              )}

              <Link href="/posts" onClick={() => setOpen(false)}>
                <div className="py-3 bg-clip-text text-transparent bg-linear-to-r from-[#eb9292] to-[#1949ab]">
                  Insights
                </div>
              </Link>

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
