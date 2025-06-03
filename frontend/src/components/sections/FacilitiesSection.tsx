// src/components/FacilitiesSection.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import salonPrivadoImg from "../../assets/images/salon-privado.png";
import psMandoImg from "../../assets/images/ps-mando.png";
import snackImg from "../../assets/images/snack.png";
import psLogoImg from "../../assets/images/ps-logo.svg";
import wifiImg from "../../assets/images/wifi.svg";
import aireCondicionadoImg from "../../assets/images/airecondicionado.svg";
import monitor from '../../assets/images/monitor.png';
import videCard from '../../assets/images/video-card.png';
import FacilitiesCard from "../FacilitiesCard";

const FacilitiesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="facilities" className="text-white mb-11">
      <h1
        id="instalaciones"
        className="font-tt-firs-neue text-4xl text-center my-9"
      >
        {t("facilities.headline")}
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 mb-8">
        <FacilitiesCard
          image={monitor}
          title={t("facilities.description")}
          backgroundSize="14rem"
          className="h-52 border-[#3CBCE5] border"
          backgroundClass="bg-[#33393F]"
          description="Lenovo Legion 24.5 240Hz"
          descriptionTextColor="text-gray-400"
        />

        <FacilitiesCard
          image={videCard}
          title={t("facilities.description_2")}
          className="h-52"
          backgroundSize="12rem"
          backgroundClass="bg-[#E58A3C]"
          description="AMD Ryzen 7 5800X 3.8GHz MSI GeForce RTX 4070"
          descriptionTextColor="text-white"
        />
      </div>
      <FacilitiesCard
        image={salonPrivadoImg}
        title={t("facilities.salon_privado")}
        className="h-80 mb-8"
        backgroundPosition="50% 50%"
      />
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
        <FacilitiesCard
          image={psMandoImg}
          title={t("facilities.ps5_zone")}
          icon={psLogoImg}
          backgroundClass="bg-[#3CBCE5]"
          backgroundSize="12rem"
          className="h-60"
        />
        <FacilitiesCard
          image={snackImg}
          title={t("facilities.snack_bar")}
          backgroundClass="bg-[#33393F] border border-orange-500"
          backgroundSize="10rem"
          className="h-60"
        />
        <FacilitiesCard
          icons={[wifiImg, aireCondicionadoImg]}
          title={t("facilities.wifi_ac")}
          backgroundClass="bg-[#33393F]"
          className="h-60"
        />
      </div>
    </div>
  );
};

export default FacilitiesSection;
