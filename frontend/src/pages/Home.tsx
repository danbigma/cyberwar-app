// src/pages/Home.tsx
import HeaderSection from "../components/topbar/HeaderSection";
import InfoSection from "../components/sections/InfoSection";
import GoogleMapsComponent from "../components/GoogleMapsComponent";
import ContactSection from "../components/sections/ContactSection";
import InfoCard from "../components/InfoCard";
import ClubPhotosSlider from "../components/ClubPhotosSlider";
import FacilitiesSection from "../components/sections/FacilitiesSection";
import PopularGamesSection from "../components/sections/PopularGamesSection";
import VideoSection from "../components/sections/VideoSection";
import AdsSwiperComponent from "../components/AdsSwiperComponent";

const Home: React.FC = () => {
  return (
    <>
      <HeaderSection />
      <div className="rounded-b-3xl bg-[#222528] px-4 pt-4 pb-1">
        <VideoSection />
        <AdsSwiperComponent />
        <FacilitiesSection />
        <InfoCard />
        <ClubPhotosSlider />
        <PopularGamesSection />
        <InfoSection />
        <GoogleMapsComponent />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
