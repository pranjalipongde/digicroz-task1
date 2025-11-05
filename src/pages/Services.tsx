import ServiceCards from "../components/ServiceCards";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <>
      {/* hero section  */}
      <section className="relative w-full h-[350px] md:h-[480px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/src/assets/breadcrumb.png"
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* Left Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-[#101B79]/85 via-[#101B79]/60 to-transparent"></div>

        <img
          src="/src/assets/left-bannerimg.png"
          alt="Left overlay"
          className="absolute inset-0"
        />

        {/* Right Overlay Image */}
        <img
          src="/src/assets/right-bannerimg.png"
          alt="Right Overlay"
          className="absolute right-0 top-0 h-full opacity-80 pointer-events-none"
        />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Services</h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm md:text-lg font-semibold">
            <span className="opacity-90">Home</span>
            <span>{">"}</span>
            <span className="font-semibold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#5F27FF] text-sm tracking-widest font-medium">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            We Provide The Best Quality
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {servicesData.map((service, index) => (
            <ServiceCards
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </section>

      <hr className="mb-10" />
    </>
  );
};

export default Services;
