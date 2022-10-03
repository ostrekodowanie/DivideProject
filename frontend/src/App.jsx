import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}