"use client";

import { useState } from "react";
import Image from "next/image";

import sarah from "@/public/icons/sarah.svg";
import aisha from "@/public/images/aisha.png"
import chinonso from "@/public/images/chinonso.png"
import john from "@/public/images/john.png"
import chevronLeft from "@/public/icons/left_nav.svg";
import chevronRight from "@/public/icons/right_nav.svg";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    img: aisha,
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision clearly and translated it into a beautiful, functional, and user-friendly online experience. The entire process felt collaborative and seamless from start to finish.",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    img: john,
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Their approach was simple yet highly effective, and we saw measurable improvements in engagement and conversions across all our campaigns.",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    img: chinonso,
    quote:
      "They consistently connect us with the right professionals for our hiring needs. Their Tech Talent Solution service is reliable, efficient, and has significantly improved the quality of candidates we bring into our organization.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    img: sarah,
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity, technical expertise, and attention to detail have helped us elevate our projects and achieve outcomes beyond expectations.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-10 pb-4 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">

        <h2 className="text-center text-[26px] md:text-[32px] font-semibold">
          Testimonials
        </h2>

        {/* VIEWPORT */}
        <div className="relative mt-8 overflow-hidden">

          {/* TRACK */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full lg:w-1/3 flex-shrink-0 px-2">

                <article className="h-full rounded-xl border-l-4 border-[#EF4353] bg-white p-5 shadow-sm ring-1 ring-black/5">

                  <div className="flex items-center gap-3">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />

                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-black/80">
                    {t.quote}
                  </p>

                </article>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex justify-end gap-3">

          <button onClick={prev} aria-label="Previous testimonial">
            <Image src={chevronLeft} alt="prev" width={24} height={24} />
          </button>

          <button onClick={next} aria-label="Next testimonial">
            <Image src={chevronRight} alt="next" width={24} height={24} />
          </button>

        </div>

      </div>

      
    </section>

    
    
  );
}

export default Testimonials;