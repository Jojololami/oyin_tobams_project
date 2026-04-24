import Image from "next/image";

const PurpleIcon = () => (
  <Image
    src="/icons/purple.svg"
    alt=""
    width={24}
    height={24}
    className="opacity-80"
  />
);

const HeroCEO = () => {
  return (
    <div>
       <section className="bg-gray-100 py-8 px-5 sm:py-20">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-[#f7bcc2] p-6 sm:p-8 shadow-soft">
          <p className="text-sm font-medium text-[#1671D9] mb-3">
            Learning With Our CEO:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#571244] italic mb-4">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-sm leading-relaxed text-brand-maroon-deep/80 mb-6">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO,
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities,
            this exclusive event offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career or enhance your
            leadership skills, the Transformation Hub provides a transformative learning
            experience to unlock your full potential and drive success in your endeavors.
          </p>

          <div className="overflow-hidden rounded-2xl mb-6">
            <Image
              src="/images/hero-ceo.jpg"
              alt="Dr. Jite Newton hosting the Transformation Hub webinar"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-auto object-cover"
            />
          </div>

         <div className="bg-[#eccfe4] mt-8 rounded-2xl p-6 text-black/80">
          <ul className="mt- space-y-4">
            {[
              "Strategic Career Guidance",
              "Leadership Development",
              "CV Development",
              "Sustainability Leadership",
              "Communication Skills",
              "Business Model",

            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#FFFFFF] px-4 py-3.5 text-[14px]"
              >
                <PurpleIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button>
              <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-md bg-[#571244] px-10 py-3 text-white text-[14px]"
                        >
                          Learn More
                          <Image
                            src="/icons/arrowUp.svg"
                            alt="Arrow Up"
                            width={10}
                            height={10}
                          />
                        </a>
            </button>
          </div>
         </div>

          
        </div>
      </div>
    </section>
    <div className="bg-gray h-6"></div>
    </div>
  )
}

export default HeroCEO