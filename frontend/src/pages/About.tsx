// src/pages/About.tsx
import HeaderSection from "../components/topbar/HeaderSection";
import GoogleMapsComponent from "../components/GoogleMapsComponent";
import ContactSection from "../components/sections/ContactSection";
import InfoCardAbout from "../components/InfoCardAbout";
import ClubInfoCard from "../components/ClubInfoCard";

const About: React.FC = () => {
  return (
    <>
    <HeaderSection />
    <div className="rounded-b-3xl bg-[#222528] px-4 pt-4 pb-1">
      <ClubInfoCard />
      <InfoCardAbout />
      <GoogleMapsComponent />
      <ContactSection />
    </div>
    </>
  );
};

export default About;
