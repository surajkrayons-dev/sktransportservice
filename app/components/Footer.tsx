"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleOptionClick = (opt: string) => {
    setFormData((s) => ({ ...s, service: opt }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (
      !formData.name ||
      !formData.phone ||
      !formData.company ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", phone: "", company: "", email: "", service: "", message: "" });
      } else {
        setError(data?.error || "Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative bg-gray-100">
      {/* ⭐ U Shape Divider */}
      <div className="relative w-full z-20 pointer-events-none bg-white">
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

          {/* INVERTED U SHAPE */}
          <path
            d="M0 220 L0 0 L1920 0 L1920 220 
              Q1400 70 960 70 
              Q520 70 0 220"
            fill="white"
            filter="url(#uShadow)"
          />

          <path
            d="M0 220 L0 0 L1920 0 L1920 220 
              Q1400 70 960 70 
              Q520 70 0 220"
            fill="#eef6ff"
          />
        </svg>
      </div>

      {/* ⭐ Contact Section */}
      <section id="contact-form" className="relative z-30 py-20 md:py-28 px-4 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900 secretWeapon">
              We are ready to{" "}
              <span className="inline-flex items-center px-3 py-1 rounded-lg text-white font-bold bg-linear-to-r from-red-300 to-orange-600">
                rock
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-blue-500">
              Ready to roll? Got questions, ideas, or just want to say hi? We&apos;re all ears!
            </p>

            <div className="mt-4 w-[85%]">
              <Image
                src="/WEBP_CTA Otter_Z1k2TcV.webp"
                alt="Contact Illustration"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl "
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE — PRO GLASS FORM */}
          <div className="
            bg-white/15 
            backdrop-blur-2xl 
            rounded-3xl 
            p-10 
            border border-white/30 
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          ">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Success message */}
              {success && (
                <div className="md:col-span-2 bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                  Thanks for reaching out! We’ll get in touch with you soon!
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="md:col-span-2 bg-red-100 text-red-800 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* NAME */}
              <div className="relative">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 text-blue-900 placeholder-blue-300 backdrop-blur-xl transition-all duration-300 focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">👤</span>
              </div>

              {/* PHONE */}
              <div className="relative">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone"
                  className="w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 text-blue-900 placeholder-blue-300 backdrop-blur-xl transition-all duration-300 focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">📞</span>
              </div>

              {/* COMPANY */}
              <div className="relative">
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company"
                  className="w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 text-blue-900 placeholder-blue-300 backdrop-blur-xl transition-all duration-300 focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">🏢</span>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 text-blue-900 placeholder-blue-300 backdrop-blur-xl transition-all duration-300 focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">✉️</span>
              </div>

              {/* OPTIONS LIST */}
              <div className="md:col-span-2 relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="
                    w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 
                    text-blue-300 backdrop-blur-xl cursor-pointer
                    transition-all duration-300 select-none relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  "
                >
                  {formData.service || "Choose Service"}

                  {/* Arrow */}
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-lg">▼</span>
                </div>

                {/* OPTIONS LIST */}
                {dropdownOpen && (
                  <div
                    className="
                      absolute w-full mt-2 bg-white rounded-xl shadow-lg z-50 
                      border border-gray-200 overflow-hidden
                    "
                  >
                    {["Landing Pages", "Ecommerce", "Web Apps", "UI/UX Design", "Maintenance + Hosting"].map((item) => (
                      <div
                        key={item}
                        onClick={() => handleOptionClick(item)}
                        className="
                          px-4 py-3 text-blue-400 cursor-pointer
                          hover:bg-blue-50 transition
                        "
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full p-4 rounded-xl bg-white/20 border border-white/40 
                    text-blue-900 placeholder-blue-300 backdrop-blur-xl
                    transition-all duration-300 
                    focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300
                    outline-none
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  "
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="arrow-loop inline-block bg-blue-700 hover:bg-blue-500 text-white py-2 px-10 rounded-full font-semibold transition duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Let’s talk business"}
                </button>

                <a
                  href="#"
                  className="text-blue-600 text-sm text-center md:text-right underline hover:text-blue-700 block"
                >
                  <h6>Wanna Chat Instead? Book a Consultation.</h6>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ⭐ Footer */}
      <footer className="relative z-20 bg-white">
        <div className="w-full px-4 md:px-10 lg:px-16 text-blue-secondary">
          <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row lg:justify-between lg:gap-12 pt-8 lg:pt-12 pb-6 lg:pb-10">

            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              <Link href="/" className="w-max">
                <Image
                  src="/krayons.png"
                  alt="Otterdev"
                  width={200}
                  height={80}
                  className="w-[150px] lg:w-[200px] h-auto"
                />
              </Link>

              <nav className="flex flex-col sm:flex-row gap-3 sm:gap-8 lg:gap-12 font-bold text-blue-600">
                {[
                  { name: "Landing Pages", href: "/websites" },
                  { name: "Ecommerce", href: "/ecommerce" },
                  { name: "Web Apps", href: "/web-apps" },
                  { name: "UX/UI Design", href: "/ui-ux-design" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative py-2 w-max transition-transform duration-300 hover:-translate-y-1
                               before:absolute before:-bottom-1.5 before:left-0
                               before:w-full before:h-0.5 before:bg-blue-600
                               before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="flex gap-4 mt-4 lg:mt-6">
                {[
                  { src: "/linkedin_Z6bcyD.webp", alt: "LinkedIn", link: "https://www.linkedin.com/company/krayons-group/" },
                  { src: "/instagram_1VYmuM.webp", alt: "Instagram", link: "https://www.instagram.com/adkrayons/" },
                  { src: "/whatsapp_Z1JDlpT.webp", alt: "WhatsApp", link: "https://wa.me/9212108750" },
                ].map((icon, index) => (
                  <Link
                    key={index}
                    href={icon.link}
                    target="_blank"
                    className="w-10 h-10 rounded-full hover:bg-blue-200 flex items-center justify-center duration-300"
                  >
                    <Image src={icon.src} alt={icon.alt} width={22} height={22} />
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="mt-8 lg:mt-0 lg:w-[365px] flex flex-col gap-4">

              <p className="font-PM font-bold text-blue-800 text-lg">
                Like what you see?
              </p>

              <p className="font-P1 text-blue-600 text-sm md:text-base">
                Got questions, ideas, or just want to say hi?
              </p>

              {/* BUTTON 1 */}
              <Link
                href="https://timesync.novocall.co/otter-ships/otterdev-discuss"
                target="_blank"
                className="w-full bg-blue-500 text-white font-semibold rounded-lg py-3
                          flex items-center justify-center gap-2
                          hover:bg-white hover:text-blue-600 border border-blue-500
                          transition duration-300"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 1C3 0.46875 3.4375 0 4 0C4.53125 0 5 0.46875 5 1V2H9V1C9 0.46875 9.4375 0 10 0C10.5312 0 11 0.46875 11 1V2H12.5C13.3125 2 14 2.6875 14 3.5V5H0V3.5C0 2.6875 0.65625 2 1.5 2H3V1ZM14 14.5C14 15.3438 13.3125 16 12.5 16H1.5C0.65625 16 0 15.3438 0 14.5V6H14V14.5Z"
                    fill="currentColor"
                  />
                </svg>
                Book a Meeting
              </Link>

              {/* BUTTON 2 */}
              <Link
                href="https://wa.me/9212108750"
                target="_blank"
                className="
                  w-full bg-white text-blue-600 font-semibold rounded-lg py-3 
                  flex items-center justify-center gap-2
                  border border-blue-500 hover:bg-blue-50
                  transition duration-300
                "
              >
                <Image src="/phone_ZU1vXz.webp" width={18} height={18} alt="phone" />
                Whatsapp Us
              </Link>

              {/* CONTACT ROW */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 mt-2">
                {/* PHONE */}
                <Link
                  href="tel:+9191114553510"
                  className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition duration-300"
                >
                  <Image
                    src="/phone_ZU1vXz.webp"
                    alt="Phone"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] object-contain"
                  />

                  {/* ONLY text gets background on hover */}
                  <span
                    className="
                      font-medium whitespace-nowrap 
                      px-2 py-1 rounded-lg
                      transition duration-300
                      hover:bg-blue-200
                    "
                  >
                    +91 91114553510
                  </span>
                </Link>

                {/* EMAIL */}
                <Link
                  href="mailto:krayonsad@gmail.com"
                  className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition duration-300 mt-2 sm:mt-0"
                >
                  <Image
                    src="/mail_2lJ0OB.webp"
                    alt="Mail"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] object-contain"
                  />

                  {/* ONLY text gets background on hover */}
                  <span
                    className="
                      font-medium whitespace-nowrap
                      px-2 py-1 rounded-lg
                      transition duration-300
                      hover:bg-blue-200
                    "
                  >
                    krayonsad@gmail.com
                  </span>
                </Link>

              </div>

            </div>

          </div>

          <div className="bg-white py-2 mt-6">
            <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between text-blue-800 text-[11px] lg:text-[14px] px-4 md:px-10 lg:px-16">
              <p>© 2025 KRAYONS GROUP. All rights reserved.</p>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
