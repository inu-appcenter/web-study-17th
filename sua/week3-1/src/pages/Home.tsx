
import Footer from '../components/Footer';
import FirstSection from '../components/sections/FirstSection';
import NewProductSection from '../components/sections/NewProductSection';
import BestProductSection from '../components/sections/BestProductSection';

function Home() {
  return (
    <div>
      <FirstSection />
      <NewProductSection />
      <BestProductSection />
      <Footer />
    </div>
  );
}

export default Home;
