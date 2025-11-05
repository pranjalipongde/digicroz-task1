import ctaPerson from "../assets/ctaimg.png";

const FooterCTA = () => {
  return (
    <section className="relative z-20 -mb-28 flex justify-center px-10 mt-12">
      <div className="relative max-w-7xl w-full bg-[#355DFF] py-14 px-8 md:px-16 shadow-lg overflow-visible">
        {/* Person Image (overlapping from left) */}
        <img
          src={ctaPerson}
          alt="CTA Person"
          className="hidden lg:block h-80 absolute -top-27 left-6 object-contain z-30"
        />

        {/* Text + Button (shifted right so it doesn't collide with image) */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between text-white gap-6"
          style={{ paddingLeft: "400px" }} // gives room for the person
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-center lg:text-left">
            Stay Connected With <br /> Cutting Edge IT
          </h2>

          <button className="bg-white text-black font-medium py-4 px-8 hover:bg-gray-100 transition shadow-sm inline-flex items-center whitespace-nowrap">
            Get A Quote <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
