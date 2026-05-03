import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white">
      <h1 className="text-2xl font-bold">NAVYAINTERIO</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
        <Link to="/kitchen" className="hover:text-yellow-400">Kitchen</Link>
        <Link to="/bedroom" className="hover:text-yellow-400">Bedroom</Link>
        <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}