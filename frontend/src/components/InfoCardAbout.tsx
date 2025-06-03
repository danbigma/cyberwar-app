// src/components/InfoCardAbout.tsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg-infocard-about.png";
import bgImageMovil from "../assets/images/bg-infocard_about_movil.png";
import energyDrink from "../assets/images/icons/energy-drink.svg";
import handphone from "../assets/images/icons/handphone.svg";
import sofa from "../assets/images/icons/sofa.svg";
import TextWithLineBreaks from "../utils/TextWithLineBreaks";
import { preloadImages } from '../utils/preloadImages';


const IconWithText: React.FC<{
  bgColor: string;
  boxShadow: string;
  imgSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  applyTopPosition?: boolean; // Новый пропс
}> = ({ bgColor, boxShadow, imgSrc, altText, title, subtitle, applyTopPosition }) => (
  <div className={`flex items-center sm:static ${applyTopPosition ? 'absolute top-[-70px]' : ''}`}>
    <div
      className={`p-2 rounded-lg flex items-center justify-center shadow-md ${bgColor}`}
      style={{ boxShadow }}
    >
      <img
        src={imgSrc}
        alt={altText}
        className="h-6 w-6 object-contain"
        loading="lazy"
      />
    </div>
    <div className="ml-2 flex flex-col justify-center">
      <span className="text-xs text-gray-300 font-semibold leading-none">
        {title}
      </span>
      <span className="text-xs text-gray-300 font-semibold mt-1">
        {subtitle}
      </span>
    </div>
  </div>
);


const InfoCardAbout: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    preloadImages([bgImage]);
  }, []);

  return (
    <div className="rounded-3xl mb-24 sm:mb-12 relative">
      <img
        src={bgImage}
        alt="Background"
        className="w-full hidden sm:block h-auto rounded-3xl object-cover"
        loading="lazy"
      />
      <img
        src={bgImageMovil}
        alt="Background"
        className="w-full sm:hidden h-auto rounded-3xl object-cover"
        loading="lazy"
      />
      <div className="absolute top-10 left-10 flex flex-col items-start gap-4">
        <h1 className="text-left text-2xl">
          <TextWithLineBreaks text={t("infocardAbout.headline")} />
        </h1>
        <p className="text-left text-md text-[#988C9E]">
          <TextWithLineBreaks text={t("infocardAbout.description")} />
        </p>
        <Link to="/about">
          <button
            className="bg-[#E58A3C] rounded-lg text-white px-3 py-1.5 items-center"
            type="button"
          >
            <span>
              <TextWithLineBreaks text={t("infocardAbout.button")} />
            </span>
          </button>
        </Link>
      </div>

      <div className="flex mt-8 px-4 absolute -bottom-14 sm:bottom-0 left-0 gap-4 sm:gap-8">
        <IconWithText
          bgColor="bg-[#E58A3C]"
          boxShadow="0 0 8px rgba(229, 138, 60, 0.6)"
          imgSrc={energyDrink}
          altText="Bar Esports Icon"
          title={t("infocardAbout.icons.bar")}
          subtitle={t("infocardAbout.icons.esports")}
          applyTopPosition={true} // Применение класса с top -70px
        />
        <IconWithText
          bgColor="bg-[#3CBCE5]"
          boxShadow="0 0 8px rgba(60, 188, 229, 0.6)"
          imgSrc={handphone}
          altText="Gaming Community Icon"
          title={t("infocardAbout.icons.gaming")}
          subtitle={t("infocardAbout.icons.community")}
        />
        <IconWithText
          bgColor="bg-[#6F329D]"
          boxShadow="0 0 8px rgba(111, 50, 157, 0.6)"
          imgSrc={sofa}
          altText="Chill Zone Icon"
          title={t("infocardAbout.icons.chill")}
          subtitle={t("infocardAbout.icons.zone")}
        />
      </div>
    </div>
  );
};

export default InfoCardAbout;
