
const Services = () => {
  const services = [
    {
      title: "Custom Portfolio Sites",
      description: "Professional portfolio websites tailored for students and professionals",
      status: "Available"
    },
    {
      title: "Mini AI Tools",
      description: "Small-scale AI applications for specific use cases and learning purposes",
      status: "Development"
    },
    {
      title: "Web App Prototypes",
      description: "Quick prototypes and MVPs for student projects and proof of concepts",
      status: "Available"
    }
  ];

  return (
    <section id="services" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services & Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  service.status === "Live Solution" 
                    ? "bg-green-100 text-green-800"
                    : service.status === "Available"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {service.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
