import React from 'react';
import { Code, Smartphone, PaintBucket, BarChart3, Network } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-transparent hover:border-teal-500">
      <div className="text-teal-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      description: "Creating responsive, modern websites and web applications using the latest technologies and best practices."
    },
    {
      icon: <Smartphone size={48} />,
      title: "App Development",
      description: "Building cross-platform mobile applications with React Native, Flutter, and native iOS/Android development."
    },
    {
      icon: <PaintBucket size={48} />,
      title: "UI/UX Design",
      description: "Designing intuitive, accessible, and beautiful user interfaces and experiences that delight users."
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Data Analytics",
      description: "Analyzing and visualizing data to extract meaningful insights and drive informed business decisions."
    },
    {
      icon: <Network size={48} />,
      title: "Networking",
      description: "Setting up and maintaining secure, efficient network infrastructures for businesses of all sizes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Services</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish a strong online presence and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;