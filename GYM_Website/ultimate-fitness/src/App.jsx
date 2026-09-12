// src/App.jsx
import Header from "./components/layout/Header";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Services from "./components/section/Services";
import Gallery from "./components/section/Gallery";
import Reviews from "./components/section/Review";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}