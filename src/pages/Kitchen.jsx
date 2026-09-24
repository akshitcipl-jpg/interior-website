import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function Kitchen() {
  const BASE_URL = import.meta.env.BASE_URL;

  const kitchenImages = [
    `${BASE_URL}kitchen1.jpg`,
    `${BASE_URL}kitchen2.jpg`,
    `${BASE_URL}kitchen3.jpg`,
  ];

  return (
    <div className="bg-[#f5f1eb] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">

        {/* LEFT CONTENT */}
        <div className="bg-[#1f3d36] text-white flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16">

          <p className="text-sm tracking-[4px] text-gray-300 mb-5">
            INTERIOR DESIGN
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
            Design Your Kitchen
            <br />
            With Our Experts
          </h1>

          <p className="text-gray-300 max-w-lg leading-7 mb-8">
            Elevate your cooking experience with beautifully designed
            kitchens tailored to your lifestyle. We create elegant,
            functional and modern spaces that feel like home.
          </p>

          <button className="bg-white text-black px-7 py-4 w-fit flex items-center gap-3 font-semibold hover:bg-gray-200 transition">
            DISCOVER MORE
            <FaArrowRight />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[500px] md:min-h-full overflow-hidden">

          <img
            src={`${BASE_URL}kitchenhome.jpg`}
            alt="Modern Kitchen"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `${BASE_URL}kitchen1.jpg`;
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* YEAR */}
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-sm tracking-widest">EST.</p>
            <h2 className="text-5xl font-bold">1920</h2>
          </div>

        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={`${BASE_URL}kitchen2.jpg`}
              alt="Kitchen Interior"
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              onError={(e) => {
                e.currentTarget.src = `${BASE_URL}kitchen1.jpg`;
              }}
            />
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-sm tracking-[3px] text-gray-500 mb-3">
              ABOUT OUR WORKSHOP
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Discover a New Look for Your Kitchen
            </h2>

            <p className="text-gray-600 leading-7 mb-7">
              We create elegant and functional kitchens using premium
              materials, thoughtful layouts and modern aesthetics.
              Every kitchen is designed according to your lifestyle
              and personal taste.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">

              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-[#1f3d36] text-white flex items-center justify-center">
                  <FaCheck size={11} />
                </span>
                Modular Kitchen
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-[#1f3d36] text-white flex items-center justify-center">
                  <FaCheck size={11} />
                </span>
                Dining Design
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-[#1f3d36] text-white flex items-center justify-center">
                  <FaCheck size={11} />
                </span>
                Kitchen Planning
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-[#1f3d36] text-white flex items-center justify-center">
                  <FaCheck size={11} />
                </span>
                Custom Interior
              </div>

            </div>

            <button className="bg-black text-white px-7 py-4 flex items-center gap-3 hover:bg-[#1f3d36] transition">
              DISCOVER MORE
              <FaArrowRight />
            </button>

          </div>
        </div>
      </section>


      {/* ================= KITCHEN DESIGNS ================= */}
      <section className="bg-white px-6 sm:px-10 lg:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">

            <p className="text-sm tracking-[3px] text-gray-500 mb-3">
              OUR COLLECTION
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Kitchen Designs
            </h2>

            <div className="w-16 h-1 bg-[#1f3d36] mx-auto mt-5"></div>

          </div>


          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {kitchenImages.map((image, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden bg-gray-200">

                  <img
                    src={image}
                    alt={`Modern Kitchen Design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* NUMBER */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 font-bold">
                    0{index + 1}
                  </div>

                </div>


                {/* CARD CONTENT */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    Modern Kitchen Design {index + 1}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mb-5">
                    Premium quality modular kitchen with stylish finish,
                    smart storage and modern design.
                  </p>

                  <button className="text-black font-semibold flex items-center gap-3 group-hover:text-[#1f3d36] transition">
                    View Details
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#1f3d36] text-white text-center px-6 py-20">

        <p className="text-sm tracking-[4px] text-gray-300 mb-4">
          LET'S CREATE TOGETHER
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Build Your Dream Kitchen?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-7">
          Let our experts transform your kitchen into a beautiful,
          functional and modern space.
        </p>

        <button className="bg-white text-black px-8 py-4 font-semibold inline-flex items-center gap-3 hover:bg-gray-200 transition">
          CONTACT US
          <FaArrowRight />
        </button>

      </section>

    </div>
  );
}