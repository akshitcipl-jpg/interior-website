import { FaArrowRight } from "react-icons/fa";

export default function Kitchen() {
  return (
    <div className="bg-[#f5f1eb]">
      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* LEFT */}
        <div className="bg-[#1f3d36] text-white flex flex-col justify-center p-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Design Your Kitchen
            <br /> With Our Experts
          </h1>
          <p className="mb-6 text-gray-300">
            Elevate your cooking experience with beautifully designed kitchens
            tailored to your lifestyle.
          </p>
          <button className="bg-white text-black px-6 py-3 w-fit flex items-center gap-2">
            DISCOVER MORE <FaArrowRight />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/kitchenhome.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm">Est.</p>
            <h2 className="text-5xl font-bold">1920</h2>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="grid md:grid-cols-2 gap-30 p-12 items-center">
        <img
          src="/kitchen2.jpg"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <p className="text-sm text-gray-500 mb-2">ABOUT OUR WORKSHOP</p>
          <h2 className="text-3xl font-bold mb-4">
            Discover a New Look for Your Kitchen
          </h2>
          <p className="text-gray-600 mb-6">
            We create elegant and functional kitchens with premium materials
            and modern aesthetics.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-6 text-gray-700">
            <li>✔ Modular Kitchen</li>
            <li>✔ Dining Design</li>
            <li>✔ Kitchen Planning</li>
            <li>✔ Custom Interior</li>
          </ul>

          <button className="bg-black text-white px-6 py-3">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="p-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Kitchen Designs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
              
  src={`/kitchen${item}.jpg`}
  className="h-60 w-full object-cover"
/>
              <div className="p-4">
                <h3 className="font-semibold mb-2">
                  Modern Kitchen Design {item}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  Premium quality modular kitchen with stylish finish.
                </p>
                <button className="text-black font-semibold flex items-center gap-2">
                  View Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1f3d36] text-white text-center p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Dream Kitchen?
        </h2>
        <button className="bg-white text-black px-6 py-3">
          CONTACT US
        </button>
      </div>
    </div>
  );
}