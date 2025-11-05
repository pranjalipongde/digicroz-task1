type ServiceCardProps = {
  icon: string;
  title: string;
  desc: string;
};

const ServiceCard = ({ icon, title, desc }: ServiceCardProps) => {
  return (
    <div className="bg-white py-8 px-8  shadow-lg hover:bg-blue-700 hover: text-white transition-shadow duration-200 ">
      <img src={icon} alt={title} className="h-12 w-12 mb-4" />

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

      <p className="text-gray-600 text-md leading-snug">{desc}</p>
    </div>
  );
};

export default ServiceCard;
