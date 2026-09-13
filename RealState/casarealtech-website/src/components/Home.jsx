import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProperties from '../components/FeaturedProperties';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      <Services setCurrentPage={setCurrentPage} />
      <WhyChooseUs setCurrentPage={setCurrentPage} />
      <FeaturedProperties setCurrentPage={setCurrentPage} />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;