import Image from "next/image";

const HeroLMS = () => {
  return (
    <section className="bg-[#f7e5f2] px-6 py-8">

      <div className=" flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center">

        {/* TITLE (always first) */}
        <h1 className="text-[20px] lg:text-[28px] font-semibold text-[#571244] lg:col-span-2">
          Learning Management System
        </h1>

        {/* IMAGE (second on mobile, left on desktop) */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="aspect-square w-full max-w-[320px] lg:max-w-[420px] overflow-hidden rounded-full ring-1 ring-black/5">
            <Image
              src="/images/hero-lms.jpg"
              alt="A man and a woman smiling and staring into the camera"
              width={327}
              height={327}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* TEXT CARD (third on mobile, right on desktop) */}
        <div className="order-3 lg:order-2 space-y-5">

          <div className="rounded-2xl bg-[#f0cde6] p-5 space-y-5">

            <p className="text-[15px] lg:text-[16px] leading-relaxed">
              TG Academy is a hub of knowledge and skill-building resources designed to empower
              tech talents on their learning journey. From technical courses covering the latest
              programming languages and development frameworks to soft skills training in
              leadership, effective communication and project management.
            </p>

            {/* COURSES */}
            <div>
              <h3 className="text-[16px] font-bold text-[#571244]">
                Some of our courses include:
              </h3>

              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-[15px] list-disc ml-5 marker:text-[#571244]">
                <li>Business Analysis</li>
                <li>Design Thinking</li>
                <li>Effective Communication</li>
                <li>Entrepreneurship</li>
                <li>Career Development</li>
                <li>Business Model</li>
              </ul>
            </div>

          </div>

          {/* BUTTON (inside card section block but visually separate) */}
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[#571244] px-5 py-3 text-white text-[14px]"
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