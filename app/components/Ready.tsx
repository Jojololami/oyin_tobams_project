const Ready = () => {
  return (
    <section className="bg-[#340628] px-6 md:px-10 py-8 md:py-10 text-white">
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT TEXT BLOCK */}
        <div className="text-left">
          <p className="text-[14px]">
            Ready to be a part of something extraordinary?
          </p>

        <h3 className="text-[18px] pt-2 md:text-[20px] lg:text-[24px] leading-relaxed md:max-w-[500px]">
  Let's work together to create a difference
</h3>
        </div>

        {/* RIGHT BUTTON */}
        <div className="mt-4 md:mt-0 md:ml-auto">
          <a
            href="#"
            className="inline-block rounded-md bg-[#571244] px-10 py-3 text-white text-[14px]"
          >
            Get in Touch
          </a>
        </div>

      </div>

    </section>
  );
};

export default Ready;