import Image from "next/image";

const HeroLMS = () => {
  return (
    <section className="bg-[#f7e5f2] px-6 py-8">
      
      {/* OUTER LAYOUT */}
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center">

        {/* TITLE */}
        <h1 className="text-[20px] lg:text-[28px] font-semibold text-[#571244] lg:col-span-2">
          Learning Management System
        </h1>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="aspect-square w-full max-w-[320px] lg:max-w-[420px] overflow-hidden rounded-full ring-1 ring-black/5">
            <Image
              src="/images/hero-lms.jpg"
              alt="A man and a woman smiling and staring into the camera"
              width={420}
              height={420}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          {/* TEXT (no heavy card feel on desktop) */}
          <p className="text-[15px] lg:text-[16px] leading-relaxed max-w-[600px]">
            TG Academy is a hub of knowledge and skill-building resources designed to empower
            tech talents on their learning journey. From technical courses covering the latest
            programming languages and development frameworks to soft skills training in
            leadership, effective communication and project management.
          </p>

          {/* COURSES */}
          <div>
            <h3 className="text-[16px] font-bold text-[#571244] mb-3">
              Some of our courses include:
            </h3>

            {/* THIS is where the 3-column layout belongs */}
            <ul className="flex flex-wrap gap-x-10 gap-y-2 text-[15px] list-disc ml-5 marker:text-[#571244] max-w-[700px]"> <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>

          {/* BUTTON */}
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[#571244] px-5 py-3 text-white text-[14px] w-fit"
          >
            Learn More
            <Image
              src="/icons/arrowUp.svg"
              alt="Arrow Up"
              width={10}
              height={10}
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroLMS;