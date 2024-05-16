import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contacts";
import Blogs from "./pages/Blogs/Blogs";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Layout from "./layouts/Layout";
import Balink from "./pages/Projects/Balink/Balink";
import RuangMahasiswa from "./pages/Projects/RuangMahasiswa/RuangMahasiswa";
import CatatanApp from "./pages/Projects/CatatanApp/CatatanApp";
import NuffahCakes from "./pages/Projects/NuffahCake/NuffahCakes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects/balink" element={<Balink />} />
          <Route
            path="/projects/ruang-mahasiswa"
            element={<RuangMahasiswa />}
          />
          <Route path="/projects/catatan-app" element={<CatatanApp />} />
          <Route path="/projects/nuffah-cakes" element={<NuffahCakes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
