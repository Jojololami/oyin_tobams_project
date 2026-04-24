import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden">

      <Image
        src="/images/hero-bgrd.jpg"
        alt="Woman working on laptop"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f0f1e]/75" />

      {/* Ambient glows */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-purple-600 opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-red-900 opacity-25 blur-3xl pointer-events-none" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        <p className="text-[13px] md:text-[14px] tracking-[0.2em] uppercase text-white mb-3 px-8 py-3 rounded-full bg-white/10">
          WHAT WE DO
        </p>

        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] text-white font-semibold leading-tight mb-4">
          Learning and Development
        </h1>

        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white max-w-[320px] md:max-w-[520px] lg:max-w-[680px] mb-8 leading-relaxed">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>

        <button className="px-8 py-3 bg-[#571244] text-white text-[13px] font-medium tracking-wide hover:bg-purple-700/30 transition-colors duration-200">
          Book a Consultation
        </button>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-white z-20" />

    </section>
  );
};

export default Hero;