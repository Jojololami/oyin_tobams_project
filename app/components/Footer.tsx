import Image from "next/image";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[18px] md:text-[20px] font-semibold">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[14px] md:text-[15px]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#11040E] text-white">

      {/* TOP DIVIDER */}
      <div className="mx-6 md:mx-10 border-t border-white" />

      {/* MAIN GRID */}
      <div className="px-6 md:px-10 py-8 md:py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center">
            <Image
              src="/icons/logo.svg"
              alt="Tobams Group logo"
              width={188}
              height={73}
            />
          </div>

          <p className="mt-5 text-[14px] md:text-[15px]">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa.
          </p>

          {/* SOCIALS */}
          <div className="mt-5 flex items-center gap-3">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
              <Image src="/icons/linkedIn.svg" alt="LinkedIn" width={40} height={40} />
            </a>

            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
              <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
            </a>

            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-card">
              <Image src="/icons/x.svg" alt="X" width={40} height={40} />
            </a>
          </div>
        </div>

        <FooterColumn title="What We Do" items={whatWeDo} />
        <FooterColumn title="Company" items={company} />
        <FooterColumn title="Solution" items={solution} />
      </div>

      {/* DIVIDER */}
      <div className="mx-6 md:mx-10 border-t border-white" />

      {/* CONTACT SECTION */}
      <div className="mx-6 mt-6 mb-6 md:mx-10 rounded-2xl bg-[#24061d] p-5 md:p-7">

        <div className="grid gap-6 md:grid-cols-3 md:gap-10">

          {/* COLUMN 1 — CONTACT */}
          <div>
            <h3 className="text-[18px] font-semibold">Contact</h3>

            <ul className="mt-4 space-y-3 text-[14px]">
              <li className="flex items-center gap-3">
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                <a href="mailto:hello@tobamsgroup.com">
                  theteam@tobamsgroup.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Image src="/icons/phone.svg" alt="Phone" width={18} height={18} />
                <a href="tel:+447886600748">
                  +447886600748
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2 — UK */}
          <div>
            <h3 className="text-[18px] font-semibold">Registered Offices</h3>

            <p className="font-semibold text-red-500 mt-4">
              United Kingdom
            </p>

            <p className="text-[13px] md:text-[14px] mt-1">
              07451196 (Registered by Company House) Vine Cottages, 215 North Street,
              Romford, Essex, United Kingdom, RM1 4QA.
            </p>
          </div>

          {/* COLUMN 3 — NIGERIA */}
          <div>
            <p className="font-semibold text-red-500 mt-9 md:mt-10">
              Nigeria
            </p>

            <p className="text-[13px] md:text-[14px] mt-1">
              RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwari-Rimi
            </p>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="mx-6 md:mx-10 border-t border-white" />

   {/* LEGAL */}
<div className="px-6 md:px-10 py-8 text-[14px]">

  <div className="flex flex-col items-center text-center gap-6 
                  md:flex-row md:justify-between md:items-center md:text-left">

    {/* LEFT — COPYRIGHT */}
    <p className="order-2 md:order-1">
      Copyright © Tobams Group, 2024. All{" "}
      <br className="md:hidden" />
      rights reserved.
    </p>

    {/* RIGHT — LINKS */}
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 
                    md:justify-end md:order-2">

      <a href="#" className="underline whitespace-nowrap">
        Privacy Policy
      </a>

      <a href="#" className="underline whitespace-nowrap">
        Cookies Policies
      </a>

      <a
        href="#"
        className="underline whitespace-nowrap w-full text-center md:w-auto"
      >
        Terms and Conditions
      </a>

    </div>

  </div>

</div>    </footer>
  );
}