"use client";

import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const glassInput =
    "w-full p-4 rounded-xl bg-white/20 border border-white/40 " +
    "text-blue-900 placeholder-blue-300 backdrop-blur-xl " +
    "transition-all duration-300 " +
    "focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 " +
    "outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]";

  const [loadDropdown, setLoadDropdown] = useState(false);
  const [bodyDropdown, setBodyDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    whatsapp: "",
    loadType: "",
    bodyType: "",
    fromLocation: "",
    toLocation: "",
    loadWeight: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (
      !formData.name ||
      !formData.phone ||
      !formData.whatsapp ||
      !formData.email ||
      !formData.loadType ||
      !formData.bodyType ||
      !formData.fromLocation ||
      !formData.toLocation ||
      !formData.loadWeight ||
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

        setFormData({
          name: "",
          phone: "",
          email: "",
          whatsapp: "",
          loadType: "",
          bodyType: "",
          fromLocation: "",
          toLocation: "",
          loadWeight: "",
          message: "",
        });
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
      <section
        id="contact-form"
        className="relative z-30 py-20 md:py-28 px-4 md:px-10 lg:px-16 bg-white"
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900 secretWeapon">
              Ready when you are. Let&apos;s get your goods
              <span className="inline-flex items-center px-3 py-1 rounded-lg text-white font-bold bg-linear-to-r from-red-300 to-orange-600">
                moving
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-[#162b5a]">
              Tell us about your load, route, and schedule. <br />
              We&apos;ll suggest the right truck and send you a quick quote.
            </p>

            <div className="mt-4 w-[85%]">
              <Image
                src="/contact-us.jpg"
                alt="Contact"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl "
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE — GLASS FORM */}
          <div
            className="
            bg-white/15
            backdrop-blur-2xl
            rounded-3xl
            p-10
            border border-white/30
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          "
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
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
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">
                  👤
                </span>
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
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">
                  📞
                </span>
              </div>

              {/* WHATSAAP */}
              <div className="relative">
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  type="text"
                  placeholder="whatsapp"
                  className="w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 text-blue-900 placeholder-blue-300 backdrop-blur-xl transition-all duration-300 focus:bg-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.4 0 .04 5.34.04 11.93c0 2.1.55 4.17 1.6 6l-1.7 6.07 6.24-1.63a12.08 12.08 0 0 0 5.86 1.5h.01c6.64 0 12.03-5.34 12.03-11.93a11.84 11.84 0 0 0-3.56-8.46zM12.04 21.4h-.01a10.3 10.3 0 0 1-5.23-1.43l-.38-.23-3.7.97.99-3.54-.25-.36a10.18 10.18 0 0 1-1.57-5.26c0-5.69 4.66-10.32 10.37-10.32a10.3 10.3 0 0 1 7.27 3.01 10.17 10.17 0 0 1 3.05 7.3c0 5.69-4.66 10.32-10.34 10.32zm5.65-7.74c-.31-.16-1.83-.9-2.12-1-.28-.1-.48-.16-.68.16-.2.31-.77 1-.95 1.21-.17.21-.35.23-.66.08-.31-.16-1.29-.48-2.45-1.54-.9-.8-1.5-1.79-1.68-2.1-.17-.31-.02-.48.13-.64.13-.13.31-.35.46-.52.15-.18.2-.3.31-.5.1-.21.05-.39-.03-.54-.08-.16-.68-1.64-.93-2.25-.24-.57-.49-.49-.68-.5h-.58c-.2 0-.52.08-.79.39s-1.04 1-1.04 2.41 1.07 2.8 1.22 2.99c.15.21 2.1 3.2 5.1 4.48.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.83-.74 2.09-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.21-.58-.37z" />
                  </svg>
                </span>
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
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl">
                  ✉️
                </span>
              </div>

              {/* LOAD TYPE DROPDOWN */}
              <div className="md:col-span-2 relative">
                <div
                  onClick={() => setLoadDropdown(!loadDropdown)}
                  className={`w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 
                    backdrop-blur-xl cursor-pointer transition-all duration-300 select-none 
                    relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    ${formData.loadType ? "text-blue-900" : "text-blue-300"}
                  `}
                >
                  {formData.loadType || "Choose Load Type"}

                  <span
                    className={`absolute right-4 top-1/2 -translate-y-1/2 text-lg
                      ${formData.loadType ? "text-blue-900" : "text-blue-300"}
                  `}
                  >
                    {loadDropdown ? "▲" : "▼"}
                  </span>
                </div>

                {loadDropdown && (
                  <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg z-50 border border-gray-200 overflow-hidden">
                    {[
                      "Part Load",
                      "Full Load",
                      "Part + Full Load",
                      "Container",
                    ].map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setFormData({ ...formData, loadType: item });
                          setLoadDropdown(false);
                        }}
                        className="px-4 py-3 text-blue-400 cursor-pointer hover:bg-blue-50 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* BODY TYPE DROPDOWN */}
              <div className="md:col-span-2 relative">
                <div
                  onClick={() => setBodyDropdown(!bodyDropdown)}
                  className={`w-full p-4 pr-12 rounded-xl bg-white/20 border border-white/40 
                    backdrop-blur-xl cursor-pointer transition-all duration-300 select-none 
                    relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    ${formData.bodyType ? "text-blue-900" : "text-blue-300"}
                  `}
                >
                  {formData.bodyType || "Choose Body Type"}

                  <span
                    className={`absolute right-4 top-1/2 -translate-y-1/2 text-lg
                      ${formData.bodyType ? "text-blue-900" : "text-blue-300"}
                    `}
                  >
                    {bodyDropdown ? "▲" : "▼"}
                  </span>
                </div>

                {bodyDropdown && (
                  <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg z-50 border border-gray-200 overflow-hidden">
                    {["Open Body", "Closed Body"].map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setFormData({ ...formData, bodyType: item });
                          setBodyDropdown(false);
                        }}
                        className="px-4 py-3 text-blue-400 cursor-pointer hover:bg-blue-50 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FROM – TO – LOAD WEIGHT */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleChange}
                  placeholder="From (City)"
                  className={glassInput}
                />

                <input
                  type="text"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleChange}
                  placeholder="To (City)"
                  className={glassInput}
                />

                <input
                  type="number"
                  name="loadWeight"
                  value={formData.loadWeight}
                  onChange={handleChange}
                  min="1"
                  placeholder="Weight (KG)"
                  className={glassInput}
                />
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
                  {loading ? "Sending..." : "Get a Quote"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ⭐ Footer */}
      <footer className="bg-white border-t border-blue-100">
        <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-blue-900">
          {/* BRAND */}
          <div className="flex flex-col gap-4">
            <Image
              src="/Sk_transport_logo.png"
              alt="SK Transport Service"
              width={300}
              height={100}
            />

            <p className="text-sm text-blue-600 leading-relaxed">
              Reliable & fast transport solutions for businesses across India.
              We move your goods safely and on time.
            </p>

            <div className="text-sm text-blue-700 space-y-1">
              <p>✔ On-time delivery</p>
              <p>✔ Open & Closed body trucks</p>
              <p>✔ Pan-India transport</p>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>Part Load Transport</li>
              <li>Full Load Transport</li>
              <li>Open Body Trucks</li>
              <li>Closed Body Trucks</li>
              <li>Container Transport</li>
            </ul>
          </div>

          {/* ROUTES */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Routes</h4>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>Delhi → Mumbai</li>
              <li>Delhi → Patna</li>
              <li>Delhi → Kolkata</li>
              <li>NCR → Bihar / UP</li>
              <li>All India Transport</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Quick Contact</h4>

            {/* MOBILE NUMBERS */}
            <div className="space-y-2 text-sm">
              <a href="tel:+919871820312" className="block hover:text-blue-600">
                📞 +91 98718 20312
              </a>
              <a href="tel:+917503520314" className="block hover:text-blue-600">
                📞 +91 75035 20314
              </a>
              <a href="tel:+919319220315" className="block hover:text-blue-600">
                📞 +91 93192 20315
              </a>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919319220315"
              target="_blank"
              className="mt-2 inline-flex items-center justify-center gap-2
               bg-green-500 hover:bg-green-600 text-white
               rounded-lg py-3 font-semibold transition"
            >
              💬 WhatsApp Us
            </a>

            {/* EMAIL – CLICKABLE */}
            <a
              href="mailto:sktransportservices75@gmail.com"
              className="text-sm text-blue-700 hover:text-blue-900"
            >
              ✉ sktransportservices75@gmail.com
            </a>
          </div>
        </div>

        {/* ADDRESS + TRUST LINE */}
        <div className="border-t border-blue-100 py-6">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            {/* OFFICE ADDRESS */}
            <div>
              <p className="font-semibold text-blue-900 mb-1">Office Address</p>
              <p>
                101, DSIDC Shed Schekm 1,
                <br />
                Near National Dharam Kanta,
                <br />
                Okhla Phase 2, New Delhi - 110020
              </p>
            </div>

            {/* TRUST STATEMENT */}
            <div className="md:text-right font-semibold text-blue-800">
              Fleet Owners & Transport Contractors —
              <br />
              Daily Services Across All Over India
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-blue-100 py-4 text-center text-sm text-blue-600">
          © 2025 SK Transport Services. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
