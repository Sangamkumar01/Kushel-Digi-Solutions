import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "UI/UX DESIGN",
      description:
        "An ordinary solution can dominate the industry with significant design which is why, We at Kushel Digi make sure to provide you with innovative and user-friendly designs. User interface and User Experience design is an integral part of any digital marketing strategy and online enterprise.We believe that design is not just about aesthetics — it is about functionality, usability, and engagement.",
      icon: "🎨",
    },
    {
      title: "E-COMMERCE DEVELOPMENT",
      description:
        "The growth of any business requires the use of e-commerce as a channel and instrument. Everything is now easy to reach and merely a click away. E-commerce solutions have made the relationship between the client and the consumer more effective and user-friendly. This is why integrating E-commerce Solutions in a business has become a necessity and is effective.",
      icon: "🛍️",
    },
    {
      title: "WEBSITE & APP DEVELOPMENT",
      description:
        "Our team of experts strives to develop the ideal website in accordance with your needs and expectations. Having a website for your business increases your credibility and awareness among audiences. We have an excellent team dedicated to design and develop a SEO-friendly and E-commerce website. It will help your clients to understand your business and your services better.",
      icon: "💻",
    },
  ];

  return (
    <section id="services" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center  mb-14">
          <p className="text-4xl mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-3xl  text-gray-500">
            We are expert in
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border black-100 rounded-lg p-8 hover:shadow-lg transition bg-white"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h3 className="text-blue-400 text-lg mb-4">
                {service.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-black hover:text-blue-600 transition text-sm">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                  ›
                </span>
                LEARN MORE
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[rgba(61,131,203,1)] text-white px-16 py-6 text-lg font-semibold rounded-lg hover:bg-[rgba(61,131,203,0.9)] transition">
            Get Started →
          </button>
        </div>

      </div>
    </section>
  );
}