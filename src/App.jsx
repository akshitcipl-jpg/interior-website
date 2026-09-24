import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Kitchen from "./pages/Kitchen";
import Bedroom from "./pages/Bedroom";
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/GalleryDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;