import { ServicesData } from "../layouts/ServicesData";

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Areas of Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 shadow-md transform transition-all duration-400 hover:scale-105 hover:shadow-xl cursor-pointer bg-gray-900 hover:bg-orange-600"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="text-2xl mb-4 flex">
                {item.icon}{" "}
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{item.title}</h3>
              </div>

              <p className="text-gray-300 mb-2">{item.description}</p>
              <p className="text-gray-200">{item.highlight}</p>
              <a
                href={item.link}
                className="mt-4 inline-block text-white font-semibold hover:underline"
              >
                Learn more <span className="inline-block ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
