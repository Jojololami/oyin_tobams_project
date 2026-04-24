import Image from "next/image";
import BoltItem from "@/app/components/BoltItem";

const HeroWhiteBg = () => {
  return (
    <div className="space-y-8">

      {/* 1. CORPORATE TRAINING (text left, image right) */}
      <section className="px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-[20px] font-semibold text-[#151515]">
              Corporate Trainings
            </h2>

            <p className="mt-5 text-[14px] text-black/70">
              Empower your team with our customised Corporate Training programs designed to address
              the unique needs and objectives of your organisation.
            </p>

            <ul className="mt-5 space-y-3 text-black/70">
              <BoltItem>Leadership Training</BoltItem>
              <BoltItem>Strategic Planning and Implementation</BoltItem>
              <BoltItem>Project Management</BoltItem>
              <BoltItem>Sustainability Training</BoltItem>
              <BoltItem>Customised Training</BoltItem>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/corporateImg.jpg"
              alt="Corporate training session"
              width={327}
              height={229}
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 2. PERSONALISED (image left, text right) */}
      <section className="px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">

          {/* IMAGE FIRST ON DESKTOP */}
          <div className="md:order-1 overflow-hidden rounded-tl-[40px] rounded-tr-xl rounded-bl-xl rounded-br-xl">
            <Image
              src="/images/personalizedImg.jpg"
              alt="personalized training"
              width={327}
              height={240}
              className="w-full object-cover"
            />
          </div>

          {/* TEXT SECOND */}
          <div className="md:order-2">
            <h2 className="text-[20px] font-semibold text-[#151515]">
              Personalised Individual Training
            </h2>

            <p className="mt-5 text-black/70 text-[14px]">
              Begin a journey of lifelong learning and professional development with tailored programs.
            </p>

            <ul className="mt-5 space-y-3 text-black/70">
              <BoltItem>Leadership Development</BoltItem>
              <BoltItem>Soft Skills Development</BoltItem>
              <BoltItem>Industry Knowledge</BoltItem>
              <BoltItem>Technical Skills</BoltItem>
              <BoltItem>Time Management</BoltItem>
              <BoltItem>Career Development</BoltItem>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. CAPACITY (text left, image right) */}
      <section className="px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-[20px] font-semibold text-[#151515]">
              Capacity Development
            </h2>

            <p className="mt-5 text-black/70 text-[14px]">
              We empower individuals and organizations through tailored training programs and workshops.
            </p>

            <ul className="mt-5 space-y-3 text-black/70">
              <BoltItem>Tailored Training Programs</BoltItem>
              <BoltItem>Expert-Led Workshops</BoltItem>
              <BoltItem>Personalized Mentorship</BoltItem>
              <BoltItem>Technical Skills</BoltItem>
              <BoltItem>Collaborative Learning</BoltItem>
              <BoltItem>Ongoing Support</BoltItem>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-tl-[40px] rounded-tr-xl rounded-bl-xl rounded-br-xl">
            <Image
              src="/images/capacityImg.jpg"
              alt="capacity development"
              width={324}
              height={232}
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeroWhiteBg;