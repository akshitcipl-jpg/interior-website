import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryImages } from "./Gallery";

export default function GalleryDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = galleryImages.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Project Not Found
          </h1>

          <Link
            to="/gallery"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold">{project.title}</h1>

        <p className="mt-4 text-xl text-yellow-400">
          {project.category}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* Back Button */}
        <Link
          to="/gallery"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition"
        >
          ← Back to Gallery
        </Link>

        {/* Featured Image */}
        <div className="mt-10">
          <img
            src={project.cover}
            alt={project.title}
            onClick={() => setSelectedImage(project.cover)}
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl cursor-pointer hover:opacity-90"
          />
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold">
            {project.title}
          </h2>

          <p className="text-gray-600 mt-4 leading-8">
            This project showcases premium interior design with modern
            aesthetics, luxury finishes, elegant furniture, and
            functional layouts. Every space is carefully designed to
            provide comfort, beauty, and a timeless look.
          </p>
        </div>

        {/* Gallery */}
        <h2 className="text-4xl font-bold text-center mt-16 mb-10">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-full h-80 object-cover cursor-pointer hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-5xl"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-[95%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}