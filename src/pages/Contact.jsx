import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919193195713";

    const text = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">

        {/* LEFT - FORM */}
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 mb-6">
            Send message on WhatsApp 📲
          </p>

          <div className="flex items-center bg-white/20 rounded-lg mb-4 px-3">
            <FaUser className="text-white mr-3" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-transparent text-white outline-none"
              required
            />
          </div>

          <div className="flex items-center bg-white/20 rounded-lg mb-4 px-3">
            <FaEnvelope className="text-white mr-3" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-transparent text-white outline-none"
              required
            />
          </div>

          <div className="flex items-start bg-white/20 rounded-lg mb-6 px-3">
            <FaCommentDots className="text-white mt-4 mr-3" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-transparent text-white outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Send Message 📲
          </button>
        </form>

        {/* RIGHT - INFO + MAP */}
        <div className="text-white space-y-6">

          <h2 className="text-2xl font-bold">Contact Information</h2>

          <p className="flex items-center gap-3"><FaUser /> Akshit Sharma</p>
          <p className="flex items-center gap-3"><FaPhone /> +91 919319XYZ</p>
          <p className="flex items-center gap-3"><FaEnvelope /> akshit@email.com</p>
          <p className="flex items-center gap-3"><FaMapMarkerAlt /> Delhi, India</p>
          <p className="flex items-center gap-3"><FaClock /> Mon - Sat : 10AM - 11PM</p>

          {/* SOCIAL */}
          <div className="flex gap-4 text-2xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>

          {/* MAP */}
          <div className="mt-6">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Delhi&output=embed"
              className="w-full h-52 rounded-lg border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}