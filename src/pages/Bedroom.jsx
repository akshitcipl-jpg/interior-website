import { FaHeart, FaFire } from "react-icons/fa";

const designs = [
  {
    title: "Modern Master Bedroom",
    img: "/bedroom1.jpg",
  },
  {
    title: "Luxury Bedroom Interior",
    img: "/bedroom2.jpg",
  },
  {
    title: "Minimal Bedroom Design",
    img: "/bedroom3.jpg",
  },
  {
    title: "Wooden Theme Bedroom",
    img: "/bedroom4.avif",
  },
  {
    title: "Classic Bedroom",
    img: "/bedroom5.jpg",
  },
  {
    title: "Elegant Bedroom",
    img: "/bedroom6.jpg",
  },
];

export default function Bedroom() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
     <div className="h-[60vh] bg-[url('/bedroomhome.jpg')] bg-cover bg-center flex items-center justify-center">
  <div className="bg-black/60 p-10 rounded-2xl text-center text-white">
    <h1 className="text-5xl font-bold mb-4">Bedroom Interior Designs</h1>
    <p className="text-lg">Make your bedroom stylish & comfortable</p>
  </div>
</div>

      {/* TRENDING SECTION */}
      <div className="p-10">
        <div className="flex items-center gap-2 mb-6">
          <FaFire className="text-red-500" />
          <h2 className="text-2xl font-bold">Trending Designs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {designs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt=""
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
                    Get Quote
                  </button>
                  <FaHeart className="text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="bg-red-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          3BHK Homes from ₹4.23 Lakh
        </h2>
        <p className="mb-6">
          Get complete bedroom interiors with premium materials.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full">
          GET FREE QUOTE
        </button>
      </div>

      {/* GALLERY */}
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-6">More Designs</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {designs.concat(designs).map((item, index) => (
            <img
              key={index}
              src={item.img}
              className="rounded-2xl h-60 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-black text-white text-center p-10">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Design Your Dream Bedroom?
        </h2>
        <button className="bg-red-500 px-6 py-3 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
}
