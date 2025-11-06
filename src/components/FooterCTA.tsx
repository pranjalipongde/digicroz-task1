import ctaPerson from "../assets/ctaimg.png";

const FooterCTA = () => {
  return (
    <section className="relative z-20 -mb-28 flex justify-center px-4 mt-24">
      <div className="relative max-w-7xl w-full bg-[#355DFF] py-14 px-6 md:px-12 shadow-lg overflow-visible">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Person Image — visible only on large screens */}
          <img
            src={ctaPerson}
            alt="CTA Person"
            className="hidden lg:block h-75 object-contain absolute left-0 bottom-0 z-30 -top-36"
          />

          {/* Text + Button Section */}
          <div className="w-full lg:pl-[260px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-center lg:text-left">
              Stay Connected With <br /> Cutting Edge IT
            </h2>

            <button className="bg-white text-black font-medium py-3 px-8 hover:bg-gray-200 transition whitespace-nowrap shadow-sm">
              Get A Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
