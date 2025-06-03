import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/bg-infocard.png";
import bgImageMovil from "../assets/images/bg-infocard_movil.png";
import starIcon from "../assets/images/icons/star.svg";
import trophyIcon from "../assets/icon/icon-7.svg";
import handphone from "../assets/images/icons/handphone.svg";
import TextWithLineBreaks from "../utils/TextWithLineBreaks";

const InfoCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl mb-24 sm:mb-12 relative">
      <img
        src={bgImage}
        alt="Background"
        className="w-full hidden sm:block h-auto rounded-3xl"
        loading="lazy"
      />
      <img
        src={bgImageMovil}
        alt="Background"
        className="w-full sm:hidden h-auto rounded-3xl"
        loading="lazy"
      />
      <div className="absolute top-10 left-10 flex flex-col items-start gap-4">
        <h1 className="text-left text-2xl">
          <span className="text-orange-500">Cyberwar</span>{" "}
          <TextWithLineBreaks text={t("infocard.headline")} />
        </h1>
        <p className="text-left text-md text-[#988C9E]">
          <TextWithLineBreaks text={t("infocard.description")} />
        </p>
        <Link to="/about">
          <button
            className="bg-[#E58A3C] rounded-lg text-white px-3 py-1.5 items-center"
            type="button"
          >
            <span>
              <TextWithLineBreaks text={t("infocard.button")} />
            </span>
          </button>
        </Link>
      </div>

      <div className="flex mt-8 px-4 absolute -bottom-14 sm:bottom-0 left-0 gap-4 sm:gap-8">
        <div className="flex items-center sm:static absolute -top-20">
          <div
            className="bg-[#E58A3C] p-2 rounded-lg flex items-center justify-center shadow-md"
            style={{ boxShadow: "0 0 8px rgba(229, 138, 60, 0.6)" }}
          >
            <img
              src={starIcon}
              alt="Star Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          <div className="ml-2 flex flex-col justify-center">
            <span className="text-xs text-gray-300 font-semibold leading-none">
              {t("infocard.icons.first.line1")}
            </span>
            <span className="text-xs text-gray-300 font-semibold mt-1">
              {t("infocard.icons.first.line2")}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="bg-[#3CBCE5] p-2 rounded-lg flex items-center justify-center shadow-md"
            style={{ boxShadow: "0 0 8px rgba(60, 188, 229, 0.6)" }}
          >
            <img
              src={trophyIcon}
              alt="Trophy Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          <div className="ml-2 flex flex-col justify-center">
            <span className="text-xs text-gray-300 font-semibold leading-none">
              {t("infocard.icons.second.line1")}
            </span>
            <span className="text-xs text-gray-300 font-semibold mt-1">
              {t("infocard.icons.second.line2")}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="bg-[#6F329D] p-2 rounded-lg flex items-center justify-center shadow-md"
            style={{ boxShadow: "0 0 8px rgba(111, 50, 157, 0.6)" }}
          >
            <img
              src={handphone}
              alt="Community Icon"
              className="h-6 w-6 object-contain"
              loading="lazy"
            />
          </div>
          <div className="ml-2 flex flex-col justify-center">
            <span className="text-xs text-gray-300 font-semibold leading-none">
              {t("infocard.icons.third.line1")}
            </span>
            <span className="text-xs text-gray-300 font-semibold mt-1">
              {t("infocard.icons.third.line2")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
