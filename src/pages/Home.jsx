import { useEffect, useState } from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ======================================================
// PUBLIC FILES
// ======================================================

const BASE_URL = import.meta.env.BASE_URL;

const HomeVideo = `${BASE_URL}home-page-1.mp4`;
const RoomVideo = `${BASE_URL}Room1.mp4`;
const Room2 = `${BASE_URL}Room2.jpg`;
const Room3 = `${BASE_URL}Room3.png`;

// ======================================================
// HOME COMPONENT
// ======================================================

export default function Home() {
  const navigate = useNavigate();

  // ====================================================
  // COUNTERS
  // ====================================================

  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [ongoing, setOngoing] = useState(0);

  // ====================================================
  // VIDEO STATES
  // ====================================================

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [roomVideoError, setRoomVideoError] = useState(false);

  // ====================================================
  // COUNTER ANIMATION
  // ====================================================

  useEffect(() => {
    let p = 0;
    let c = 0;
    let o = 0;

    const interval = setInterval(() => {
      if (p < 500) p += 5;
      if (c < 350) c += 3;
      if (o < 50) o += 1;

      setProjects(Math.min(p, 500));
      setClients(Math.min(c, 350));
      setOngoing(Math.min(o, 50));

      if (p >= 500 && c >= 350 && o >= 50) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // ====================================================
  // HERO VIDEO ERROR
  // ====================================================

  const handleHeroVideoError = () => {
    console.error("Hero video could not be loaded:", HomeVideo);
    setVideoError(true);
  };

  // ====================================================
  // ROOM VIDEO ERROR
  // ====================================================

  const handleRoomVideoError = () => {
    console.error("Room video could not be loaded:", RoomVideo);
    setRoomVideoError(true);
  };

  // ====================================================
  // RETURN
  // ====================================================

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="relative w-full h-screen min-h-[650px] overflow-hidden">

        {/* FALLBACK IMAGE */}

        <img
          src={Room2}
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* HERO VIDEO */}

        {!videoError && (
          <video
            key={HomeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onError={handleHeroVideoError}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-opacity
              duration-700
              ${videoLoaded ? "opacity-100" : "opacity-0"}
            `}
          >
            <source
              src={HomeVideo}
              type="video/mp4"
            />
          </video>
        )}

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/55 z-[1]" />

        {/* GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-[2]" />

        {/* HERO CONTENT */}

        <div className="relative z-[3] flex items-center h-full px-6 md:px-16 lg:px-20">

          <div className="max-w-3xl">

            <p className="text-yellow-400 uppercase tracking-[5px] text-xs sm:text-sm md:text-base mb-5">
              Interior Design Studio
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">

              DESIGN

              <br />

              YOUR

              <br />

              <span className="text-yellow-400">
                DREAM
              </span>

            </h1>

            <p className="mt-7 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-8">
              Interior Styling | Space Planning | Carpenter Work
            </p>


            {/* ==================================================
                HERO BUTTONS
            ================================================== */}

            <div className="flex flex-wrap gap-4 mt-8">

              {/* CONTACT US → CONTACT PAGE */}

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="
                  bg-yellow-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  flex
                  items-center
                  gap-3
                  hover:bg-yellow-300
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                Contact Us
                <FaArrowRight />
              </button>


              {/* VIEW PROJECTS → GALLERY PAGE */}

              <button
                type="button"
                onClick={() => navigate("/gallery")}
                className="
                  border
                  border-white/60
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-white
                  hover:text-black
                  transition
                  duration-300
                "
              >
                View Projects
              </button>

            </div>

          </div>

        </div>


        {/* SCROLL */}

      
      </section>

      {/* ==================================================
          ABOUT SECTION
      ================================================== */}

      <section className="bg-[#111] px-6 py-16 md:px-16 lg:px-20 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
              FROM HOMES TO OFFICES,
              <br />

              WE BRING YOUR

              <br />

              <span className="text-yellow-400">
                VISION TO LIFE
              </span>

            </h2>

            <p className="text-gray-400 leading-8 mb-7 max-w-xl">
              We design modern interiors with creative ideas.
              Our team provides high-quality carpenter work,
              modular furniture, and complete home solutions
              with premium finishing.
            </p>


            {/* GET DESIGN → GALLERY */}

            <button
              type="button"
              onClick={() => navigate("/gallery")}
              className="
                bg-yellow-400
                text-black
                px-7
                py-3
                rounded-full
                font-semibold
                hover:bg-yellow-300
                hover:scale-105
                transition
                duration-300
                flex
                items-center
                gap-3
              "
            >
              Get Design
              <FaArrowRight />
            </button>

          </div>


          {/* STATISTICS */}

          <div className="grid grid-cols-2 gap-5">

            {/* PROJECTS */}

            <div
              className="
                bg-[#1b1b1b]
                rounded-2xl
                p-7
                md:p-8
                text-center
                border
                border-white/5
                hover:border-yellow-400/40
                transition
              "
            >

              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
                {projects}+
              </h3>

              <p className="text-gray-400 mt-3">
                Projects
              </p>

            </div>


            {/* CLIENTS */}

            <div
              className="
                bg-[#1b1b1b]
                rounded-2xl
                p-7
                md:p-8
                text-center
                border
                border-white/5
                hover:border-yellow-400/40
                transition
              "
            >

              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
                {clients}+
              </h3>

              <p className="text-gray-400 mt-3">
                Clients
              </p>

            </div>


            {/* ONGOING */}

            <div
              className="
                bg-[#1b1b1b]
                rounded-2xl
                p-7
                md:p-8
                text-center
                border
                border-white/5
                hover:border-yellow-400/40
                transition
              "
            >

              <h3 className="text-4xl md:text-5xl font-bold text-yellow-400">
                {ongoing}+
              </h3>

              <p className="text-gray-400 mt-3">
                Ongoing
              </p>

            </div>


            {/* SINCE */}

            <div className="bg-yellow-400 rounded-2xl p-7 md:p-8 text-center">

              <h3 className="text-4xl md:text-5xl font-bold text-black">
                2005
              </h3>

              <p className="text-black mt-3 font-medium">
                Since
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SERVICES
      ================================================== */}

      <section className="bg-black px-6 py-16 md:px-16 lg:px-20 md:py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Services
            </h2>
         </div>
        <div className="grid md:grid-cols-3 gap-7">

            {/* SERVICE 1 */}

            <div
              className="
                bg-[#111]
                rounded-2xl
                p-8
                border
                border-white/5
                hover:border-yellow-400/50
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-7">

                <span className="text-black text-lg font-bold">
                  01
                </span>

              </div>

              <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                Interior Design
              </h3>

              <p className="text-gray-400 leading-7">
                Modern and stylish interior design solutions
                created according to your lifestyle and space.
              </p>

            </div>


            {/* SERVICE 2 */}

            <div
              className="
                bg-[#111]
                rounded-2xl
                p-8
                border
                border-white/5
                hover:border-yellow-400/50
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-7">

                <span className="text-black text-lg font-bold">
                  02
                </span>

              </div>

              <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                Carpenter Work
              </h3>

              <p className="text-gray-400 leading-7">
                Modular kitchens, wardrobes and custom furniture
                designed and built with quality materials.
              </p>

            </div>


            {/* SERVICE 3 */}

            <div
              className="
                bg-[#111]
                rounded-2xl
                p-8
                border
                border-white/5
                hover:border-yellow-400/50
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-7">

                <span className="text-black text-lg font-bold">
                  03
                </span>

              </div>

              <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                Furniture Design
              </h3>

              <p className="text-gray-400 leading-7">
                Creative, stylish and durable furniture designs
                made to match your interior.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          GALLERY
      ================================================== */}

      <section className="bg-[#111] px-6 py-16 md:px-16 lg:px-20 md:py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

         

            <h2 className="text-4xl md:text-5xl font-bold">
              Our Work
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {/* ROOM 2 */}

            <div className="group relative overflow-hidden rounded-2xl">

              <img
                src={Room2}
                alt="Interior Room 2"
                className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  group-hover:bg-black/40
                  transition
                  duration-500
                "
              />

              <div className="absolute bottom-5 left-5">

                <span className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Interior Design
                </span>

              </div>

            </div>


            {/* ROOM 3 */}

            <div className="group relative overflow-hidden rounded-2xl">

              <img
                src={Room3}
                alt="Interior Room 3"
                className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  group-hover:bg-black/40
                  transition
                  duration-500
                "
              />

              <div className="absolute bottom-5 left-5">

                <span className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Modern Interior
                </span>

              </div>

            </div>


            {/* ROOM VIDEO */}

            <div className="group relative overflow-hidden rounded-2xl bg-black">

              {!roomVideoError ? (

                <video
                  src={RoomVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={handleRoomVideoError}
                  className="
                    w-full
                    h-80
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              ) : (

                <div className="w-full h-80 flex items-center justify-center bg-[#222]">

                  <div className="text-center px-5">

                    <FaPlay className="text-yellow-400 text-3xl mx-auto mb-3" />

                    <p className="text-gray-400 text-sm">
                      Room video unavailable
                    </p>

                  </div>

                </div>

              )}


              {!roomVideoError && (
                <>
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      group-hover:bg-black/35
                      transition
                      duration-500
                    "
                  />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                    <div
                      className="
                        bg-yellow-400
                        text-black
                        p-4
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        scale-90
                        group-hover:scale-100
                        transition
                        duration-300
                        shadow-xl
                      "
                    >
                      <FaPlay className="text-lg ml-1" />
                    </div>

                  </div>

                  <div className="absolute bottom-5 left-5">

                    <span className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      Project Video
                    </span>

                  </div>
                </>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="bg-yellow-400 text-black px-6 py-16 md:px-16 md:py-24">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-sm font-semibold mb-4">
            Let's Create Together
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            READY TO DESIGN

            <br />

            YOUR DREAM SPACE?

          </h2>


          {/* CONTACT US → CONTACT PAGE */}

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="
              mt-8
              bg-black
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-gray-800
              hover:scale-105
              transition
              inline-flex
              items-center
              gap-3
            "
          >
            Contact Us
            <FaArrowRight />
          </button>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="bg-black px-6 py-8">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Interior Design Studio.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}