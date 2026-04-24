import Image from "next/image";

const BoltIcon = () => (
  <Image
    src="/icons/whitebolt.svg"
    alt=""
    width={32}
    height={32}
    className="opacity-80"
  />
);

const HeroMDP = () => {
  return (
    <section className="mx-5 my-5 overflow-hidden rounded-2xl bg-[#2C0922] px-6 py-7 text-white/80">

      {/* GRID WRAPPER */}
      <div className="grid gap-6 md:gap-10 md:grid-cols-2 md:items-center">

        {/* IMAGE (LEFT on desktop) */}
       <div className="h-full overflow-hidden md:order-1 rounded-tl-xl rounded-tr-xl">
  <Image
    src="/images/mdpImage.jpg"
    alt="Management development program"
    width={287}
    height={232}
    loading="lazy"
    className="h-full w-full object-cover"
  />
</div>

        {/* TEXT (RIGHT on desktop) */}
        <div className="md:order-2">

         
          <h2 className="text-[24px] md:text-[32px] leading-tight font-semibold text-white">
            Management Development Program
          </h2>

          <div className="mt-5 space-y-4 text-[15px]">
            <p>
              Tobams Group offers a comprehensive Management Development Program designed to equip
              corporate organisations with the high-performing leaders they need to thrive.
            </p>
            <p>
              Our program includes workshops, seminars, coaching sessions, online courses, and
              experiential learning opportunities designed to improve leadership, strategic
              thinking, communication, and other essential managerial competencies for corporate
              organisations.
            </p>
          </div>

          <ul className="mt-7 space-y-3">
            {[
              "Enhanced Leadership Skills",
              "Improved Employee Engagement",
              "Stronger Organisational Culture",
              "Sustainable Growth",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#8F6182] px-4 py-3.5 text-[14px]"
              >
                <BoltIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default HeroMDP;