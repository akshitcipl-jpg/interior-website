import { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    category: "Living Room",
    title: "Modern Living Room",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&auto=format&fit=crop&q=80",
    ],
  },

  {
    id: 2,
    category: "Bedroom",
    title: "Luxury Bedroom",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
    ],
  },

  {
    id: 3,
    category: "Kitchen",
    title: "Modern Kitchen",
    cover:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
    ],
  },

  {
    id: 4,
    category: "Commercial",
    title: "Commercial Office Interior",
    cover:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    ],
  },

  {
    id: 5,
    category: "Modern Home",
    title: "Modern Home Interior",
    cover:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
    ],
  },

  {
    id: 6,
    category: "TV Unit",
    title: "Premium TV Unit",
    cover:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
    ],
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Commercial",
    "Modern Home",
    "TV Unit",
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === filter);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Our Gallery</h1>
        <p className="mt-4 text-lg text-gray-300">
          Explore Our Premium Interior Design Collection
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 py-10 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
              filter === category
                ? "bg-yellow-500 text-white"
                : "bg-white shadow hover:bg-yellow-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-5 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">
              <span className="text-yellow-600 font-semibold">
                {item.category}
              </span>

              <h2 className="text-2xl font-bold mt-2">{item.title}</h2>

              <Link
                to={`/gallery/${item.id}`}
                className="inline-block mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                View Images
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { galleryImages };