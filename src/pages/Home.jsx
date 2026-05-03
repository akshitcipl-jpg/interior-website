// import { FaPlay } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div>

//       {/* ================= HERO ================= */}
//       <div className="relative h-screen w-full overflow-hidden">

//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         >
//           <source src="/home1.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

//         <div className="relative z-10 flex items-center h-full px-10 md:px-20 text-white">
//           <div className="max-w-xl">
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//               DESIGN <br /> YOUR <br /> DREAM
//             </h1>

//             <p className="mt-6 text-lg text-gray-200">
//               Interior Styling | Space Planning | Carpenter Work
//             </p>

//             <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
//               Explore Design
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= ABOUT ================= */}
//       <div className="p-10 md:p-16 grid md:grid-cols-2 gap-10 bg-gray-100">

//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             FROM HOMES TO OFFICES, WE BRING YOUR VISION TO LIFE
//           </h2>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             We design modern interiors with creative ideas. Our team provides 
//             high-quality carpenter work, modular furniture, and complete home 
//             solutions with premium finishing and long-lasting quality.
//           </p>

//           <button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
//             Get Design
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-5">

//           <div className="bg-white p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
//             <h1 className="text-3xl font-bold">350+</h1>
//             <p className="text-gray-600">Projects</p>
//           </div>

//           <div className="bg-white p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
//             <h1 className="text-3xl font-bold">200+</h1>
//             <p className="text-gray-600">Clients</p>
//           </div>

//           <div className="bg-white p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
//             <h1 className="text-3xl font-bold">25+</h1>
//             <p className="text-gray-600">Ongoing</p>
//           </div>

//           <div className="bg-yellow-200 p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
//             <h1 className="text-3xl font-bold">2014</h1>
//             <p className="text-gray-700">Since</p>
//           </div>

//         </div>
//       </div>

//       {/* ================= SERVICES ================= */}
//       <div className="p-10 md:p-16 bg-white">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Our Services
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">

//           <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <h3 className="text-xl font-bold mb-3">Interior Design</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Modern and stylish interior design solutions for homes and offices.
//             </p>
//           </div>

//           <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <h3 className="text-xl font-bold mb-3">Carpenter Work</h3>
//             <p className="text-gray-600 leading-relaxed">
//               High-quality carpenter services including modular kitchen and furniture.
//             </p>
//           </div>

//           <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
//             <h3 className="text-xl font-bold mb-3">Furniture Design</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Creative and durable furniture designs for modern lifestyle.
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* ================= GALLERY ================= */}
//       <div className="p-10 md:p-16 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Work
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           {/* 🔥 VIDEO CARD */}
//           <a href="/room1.mp4" target="_blank" rel="noopener noreferrer">
//             <div className="relative overflow-hidden rounded-xl cursor-pointer group">

//               <img
//                 src="/room1.jpg"
//                 className="w-full h-80 object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

//               {/* Play Icon */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-black/70 p-4 rounded-full">
//                   <FaPlay className="text-white text-xl" />
//                 </div>
//               </div>

//             </div>
//           </a>

//           {/* IMAGE 2 */}
//           <div className="overflow-hidden rounded-xl">
//             <img
//               src="/room2.jpg"
//               className="w-full h-80 object-cover hover:scale-110 transition duration-300"
//             />
//           </div>

//           {/* IMAGE 3 */}
//           <div className="overflow-hidden rounded-xl">
//             <img
//               src="/room3.png"
//               className="w-full h-80 object-cover hover:scale-110 transition duration-300"
//             />
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Home() {

  // 🔥 Counter States
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [ongoing, setOngoing] = useState(0);

  // 🔥 Counter Animation
  useEffect(() => {
    let p = 0, c = 0, o = 0;

    const interval = setInterval(() => {
      if (p < 350) p += 5;
      if (c < 200) c += 3;
      if (o < 25) o += 1;

      setProjects(p);
      setClients(c);
      setOngoing(o);

      if (p >= 350 && c >= 200 && o >= 25) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <div className="relative h-screen w-full overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home1.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <div className="relative z-10 flex items-center h-full px-10 md:px-20">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              DESIGN <br /> YOUR <br /> DREAM
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Interior Styling | Space Planning | Carpenter Work
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Explore Design
            </button>
          </div>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="p-10 md:p-16 grid md:grid-cols-2 gap-10 bg-[#111]">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FROM HOMES TO OFFICES, WE BRING YOUR VISION TO LIFE
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            We design modern interiors with creative ideas. Our team provides 
            high-quality carpenter work, modular furniture, and complete home 
            solutions with premium finishing and long-lasting quality.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            Get Design
          </button>
        </div>

        {/* 🔥 Animated Stats */}
        <div className="grid grid-cols-2 gap-5">

          <div className="bg-[#1a1a1a] p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
            <h1 className="text-3xl font-bold text-yellow-400">{projects}+</h1>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-[#1a1a1a] p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
            <h1 className="text-3xl font-bold text-yellow-400">{clients}+</h1>
            <p className="text-gray-400">Clients</p>
          </div>

          <div className="bg-[#1a1a1a] p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
            <h1 className="text-3xl font-bold text-yellow-400">{ongoing}+</h1>
            <p className="text-gray-400">Ongoing</p>
          </div>

          <div className="bg-yellow-400 p-6 shadow-lg text-center rounded-xl hover:scale-105 transition">
            <h1 className="text-3xl font-bold text-black">2010</h1>
            <p className="text-black">Since</p>
          </div>

        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="p-10 md:p-16 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-[#111] shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Interior Design</h3>
            <p className="text-gray-400">
              Modern and stylish interior design solutions for homes and offices.
            </p>
          </div>

          <div className="p-6 bg-[#111] shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Carpenter Work</h3>
            <p className="text-gray-400">
              High-quality carpenter services including modular kitchen and furniture.
            </p>
          </div>

          <div className="p-6 bg-[#111] shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Furniture Design</h3>
            <p className="text-gray-400">
              Creative and durable furniture designs for modern lifestyle.
            </p>
          </div>

        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="p-10 md:p-16 bg-[#111]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* VIDEO CARD */}
          <a href="/room1.mp4" target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden rounded-xl cursor-pointer group">

              <img
                src="/room1.jpg"
                className="w-full h-80 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 p-4 rounded-full">
                  <FaPlay className="text-white text-xl" />
                </div>
              </div>

            </div>
          </a>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/room2.jpg"
              className="w-full h-80 object-cover hover:scale-110 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src="/room3.png"
              className="w-full h-80 object-cover hover:scale-110 transition duration-300"
            />
          </div>

        </div>
      </div>

    </div>
  );
}