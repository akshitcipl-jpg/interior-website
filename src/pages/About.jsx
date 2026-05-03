export default function About() {
  return (
    <div>

      {/* ===== HERO / HEADER ===== */}
      <div
        className="h-[40vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold">ABOUT US</h1>
        </div>
      </div>

      {/* ===== ABOUT CONTENT ===== */}
      <div className="p-10 md:p-16 bg-gray-100 grid md:grid-cols-3 gap-8">

        {/* Left Text */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">
            ABOUT AD INTERIOR
          </h2>

          <p className="text-gray-600 mb-4">
            We have the right products to fit your needs. Our team specializes 
            in interior design and carpenter work with high quality materials.
          </p>

          <p className="text-gray-600">
            We provide complete solutions from design to execution with 
            professional management and best results.
          </p>

          <p className="mt-4 font-semibold">Sharma ji</p>
          <p className="text-sm text-gray-500">CEO & Founder</p>
        </div>

        {/* Image 1 */}
        <div className="bg-white p-4 shadow rounded-xl">
          <img
            src="https://bizimages.withfloats.com/actual/63bd1c7ee50f5e00012481c1.jpg"
            className="rounded-lg mb-3"
          />
          <h3 className="font-bold">Our bedrooms</h3>
         <p className="text-sm text-gray-600 leading-relaxed">
  We specialize in designing modern modular bedrooms that combine smart storage solutions, elegant aesthetics, and maximum comfort. Our designs are crafted to optimize space, enhance functionality, and create a peaceful environment that reflects your lifestyle and personal taste.
</p>
        </div>

        {/* Image 2 */}
        <div className="bg-white p-4 shadow rounded-xl">
          <img
            src="https://media.designcafe.com/wp-content/uploads/2022/10/06190152/interior-designer-vs-carpenter-time-management.jpg"
            className="rounded-lg mb-3"
          />
          <h3 className="font-bold">Our Vision</h3>
          <p className="text-sm text-gray-600">
             This section highlights the perfect coordination between interior designers and skilled carpenters. While designers focus on planning, creativity, and space management, carpenters bring those ideas to life with precision and craftsmanship. Proper time management and teamwork ensure that every project is completed efficiently, maintaining both quality and deadlines. Together, they create functional, stylish, and well-structured living spaces.
          </p>
        </div>

      </div>

      {/* ===== WHY CHOOSE US ===== */}
      {/* <div className="p-10 md:p-16 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          WHY CHOOSE INTERIOR
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Original Designs
            </h3>
            <p className="text-gray-300 text-sm">
              We create unique and modern designs according to your space.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Trusted Work
            </h3>
            <p className="text-gray-300 text-sm">
              Our team ensures high quality carpenter and interior work.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Timely Delivery
            </h3>
            <p className="text-gray-300 text-sm">
              We complete projects on time with proper planning.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Honest Pricing
            </h3>
            <p className="text-gray-300 text-sm">
              Transparent pricing with no hidden charges.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Best Quality
            </h3>
            <p className="text-gray-300 text-sm">
              We use premium materials for long-lasting interiors.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl hover:scale-105 transition">
            <h3 className="font-bold mb-2 text-orange-400">
              Good Communication
            </h3>
            <p className="text-gray-300 text-sm">
              We keep clients updated at every stage of the project.
            </p>
          </div>

        </div>
      </div> */}
<div className="p-10 md:p-20 bg-black text-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
    WHY CHOOSE INTERIOR
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* Card 1 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Original Designs
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        We create completely unique and customized interior designs that match 
        your lifestyle and personality. Every project is designed with creativity, 
        modern trends, and practical use in mind so your space looks stylish and feels comfortable.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Trusted Work
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        Our experienced team ensures high-quality interior and carpenter work 
        using the best materials. We focus on durability, finishing, and customer 
        satisfaction to build long-term trust with every client.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Timely Delivery
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        We understand the value of your time. Our team follows proper planning 
        and workflow to complete every project within the promised timeline 
        without compromising on quality.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Honest Pricing
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        We believe in full transparency. Our pricing is clear, fair, and free 
        from hidden charges so you can plan your budget confidently and 
        get the best value for your investment.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Best Quality Materials
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        We use premium quality materials for all interior and woodwork projects. 
        This ensures long-lasting durability, strong structure, and a luxury 
        finish that enhances your overall space.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-[#111] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition duration-300">
      <h3 className="font-bold mb-3 text-xl text-orange-400">
        Clear Communication
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        We keep you updated at every stage of the project. From planning to 
        execution, our team ensures smooth communication so you always stay 
        informed and involved in every decision.
      </p>
    </div>

  </div>
</div>
    </div>
  );
}