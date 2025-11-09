
import { useLocation } from "react-router-dom";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import Footer from "./Footer";
import ServiceContent from "../pages/ServiceContent";
import HomeContent from "../pages/HomeContent";
import FunCityContent from "../pages/FunCityContent";
import VillasContent from "../pages/VillasContent";
import WeddingHiresContent from "../pages/WeddingHiresContent";
import ResidenciesContent from "../pages/ResidenciesContent";
import ContactUs from "../pages/ContactUs";
import { heroHome, heroService, heroFunCity, heroVillas, heroWeddingHires, heroResidencies } from '../config/heroConfig';

const PageLayout = ({ children }) => {
  const location = useLocation();
  
  const routeConfig = {
    '/': { content: <HomeContent />, hero: heroHome },
    '/service': { content: <ServiceContent />, hero: heroService },
    '/funcity': { content: <FunCityContent />, hero: heroFunCity },
    '/villas': { content: <VillasContent />, hero: heroVillas },
    '/wedding-hires': { content: <WeddingHiresContent />, hero: heroWeddingHires },
    '/residencies': { content: <ResidenciesContent />, hero: heroResidencies },
    '/contact': { content: <ContactUs /> }
  };

  const currentRoute = routeConfig[location.pathname];
  const heroConfig = currentRoute?.hero;

  return (
    <>
      <Header />
      {heroConfig && location.pathname === '/' && (
        <HeroSlider
          images={heroConfig.images}
          title={heroConfig.title}
          subtitle={heroConfig.subtitle}
          stats={heroConfig.stats}
        />
      )}
      {currentRoute?.content || children}
      <Footer />
    </>
  );
};

export default PageLayout;
