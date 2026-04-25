import Image from "next/image";

const features = [
  {
    title: "Expert-Led Learning",
    body: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    body: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    body: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    body: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

const Consultant = () => {
  return (
    <section className="bg-[#d891c51a] pt-2">
      <div className="mx-auto px-6 max-w-5xl">

        {/* TEXT CONTENT */}
        <h2 className="text-3xl text-[#571244] font-bold mb-4">
          Training The Consultant
        </h2>

        <p className="text-lg font-semibold text-[#571244] mb-4">
          Maximize Your Potential as a Certified Trainer:
        </p>

        <p className="text-sm md:text-base leading-relaxed mb-8">
          With the help of our Business Analysis Training Consultants program, take a revolutionary
          step toward becoming a distinguished certified trainer. Learn from professionals in the
          field, immerse yourself in a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to gain expertise in
          Business Analysis while also developing the abilities to mentor and encourage others in
          their career advancement.
        </p>

        {/* FEATURES GRID */}
        <div className="rounded-2xl text-white bg-[#571244] p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-base font-bold mb-1.5">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-6 pb-6">
          <a
            href="#"
            className="inline-flex items-center gap-4 rounded-md bg-[#571244] px-10 py-3 text-white text-[14px]"
          >
            Learn More
            <Image
              src="/icons/right_arrow.svg"
              alt="right arrow"
              width={10}
              height={10}
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Consultant;