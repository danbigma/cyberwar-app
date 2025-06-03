// src/components/ClubInfoCard.tsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Импорт изображений логотипов
import nvidiaIcon from "../assets/images/icons/nvidia.svg";
import msiIcon from "../assets/images/icons/msi.svg";
import corsairIcon from "../assets/images/icons/corsair.svg";
import playstationIcon from "../assets/images/icons/playstation.svg";
import ryzenIcon from "../assets/images/icons/ryzen.svg";
import razerIcon from "../assets/images/icons/razer.svg";

// Импорт изображения клуба
import clubImage from "../assets/images/club.png";
import TextWithLineBreaks from "../utils/TextWithLineBreaks";

import { preloadImages } from '../utils/preloadImages';

const ClubInfoCard: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    preloadImages([clubImage]);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Текстовая часть */}
      <div className="flex-1 bg-[#33393F] rounded-3xl p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          <span className="text-orange-500">Cyberwar</span>{" "}
          <TextWithLineBreaks text={t("clubInfoCard.headline")} />
        </h2>
      </div>

      {/* Изображение с логотипами */}
      <div className="flex-1 relative z-10">
        <img
          src={clubImage}
          alt={t("clubInfoCard.bottomText")}
          className="rounded-3xl w-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <img src={nvidiaIcon} alt="Nvidia Logo" className="h-8" />
          <img src={msiIcon} alt="MSI Logo" className="h-8" />
          <img src={corsairIcon} alt="Corsair Logo" className="h-8" />
          <img src={playstationIcon} alt="Playstation Logo" className="h-8" />
          <img src={ryzenIcon} alt="Ryzen Logo" className="h-8" />
          <img src={razerIcon} alt="Razer Logo" className="h-8" />
        </div>
        <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
          <TextWithLineBreaks text={t("clubInfoCard.bottomText")} />
        </div>
      </div>
    </div>
  );
};

export default ClubInfoCard;
