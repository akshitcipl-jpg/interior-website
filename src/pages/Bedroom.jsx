import { FaHeart, FaFire } from "react-icons/fa";

// Images
import bedroomHome from "../assets/bedroomhome.jpg";
import bedroom1 from "../assets/bedroom1.jpg";
import bedroom2 from "../assets/bedroom2.jpg";
import bedroom3 from "../assets/bedroom3.jpg";
import bedroom4 from "../assets/bedroom4.avif";
import bedroom5 from "../assets/bedroom5.jpg";
import bedroom6 from "../assets/bedroom6.jpg";

const designs = [
  {
    title: "Modern Master Bedroom",
    img: bedroom1,
  },
  {
    title: "Luxury Bedroom Interior",
    img: bedroom2,
  },
  {
    title: "Minimal Bedroom Design",
    img: bedroom3,
  },
  {
    title: "Wooden Theme Bedroom",
    img: bedroom4,
  },
  {
    title: "Classic Bedroom",
    img: bedroom5,
  },
  {
    title: "Elegant Bedroom",
    img: bedroom6,
  },
];

export default function Bedroom() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bedroomHome})`,
        }}
      >
        <div className="bg-black/60 px-10 py-8 rounded-2xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Bedroom Interior Designs
          </h1>

          <p className="text-lg text-white">
            Make your bedroom stylish & comfortable
          </p>
        </div>
      </div>

      {/* Trending */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-2 mb-8">
          <FaFire className="text-red-500 text-2xl" />
          <h2 className="text-3xl font-bold">
            Trending Designs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {designs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 duration-500"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between">

                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full">
                    Get Quote
                  </button>

                  <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer text-xl" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Feature */}
      <section className="bg-red-100 py-16">

        <div className="max-w-6xl mx-auto text-center px-5">

          <h2 className="text-4xl font-bold mb-4">
            3BHK Bedroom Interiors Starting From ₹4.23 Lakh
          </h2>

          <p className="text-gray-700 mb-8">
            Premium Bedroom Interiors with elegant designs and high-quality
            materials.
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full">
            GET FREE QUOTE
          </button>

        </div>

      </section>

      {/* Gallery */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          More Bedroom Designs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[...designs, ...designs].map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.title}
              className="w-full h-72 rounded-2xl shadow-lg object-cover hover:scale-105 duration-500"
            />
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-5">

          <h2 className="text-4xl font-bold mb-5">
            Ready To Design Your Dream Bedroom?
          </h2>

          <p className="text-gray-300 mb-8">
            Contact our experts today and get a FREE consultation.
          </p>

          <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
}