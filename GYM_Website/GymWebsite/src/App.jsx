import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Facilities from './components/Facilities/Facilities'
import Pricing from './components/Pricing/Pricing'
import Trainers from './components/Trainers/Trainers'
import Testimonials from './components/Testimonials/Testimonials'
import Features from './components/Features/Features'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contacts/Contacts'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Facilities/>
      <Pricing/>
      <Trainers/>
      <Testimonials/>
      <Features/>
      <Gallery/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
