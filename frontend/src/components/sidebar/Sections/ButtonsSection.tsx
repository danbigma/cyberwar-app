import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const ButtonsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-around gap-4 mt-4 p-4 pt-0">
      <a
        href="https://www.instagram.com/direct/t/17842023225077500/"
        target="_blank"
        rel="noreferrer"
        className="border border-orange-500 font-tt-firs-neue hover:bg-[#E58A3C] rounded-lg text-center text-white px-5 py-1.5 transition-colors duration-200"
        style={{ boxShadow: "0 0 6px rgba(229, 138, 60, 0.6)" }}
      >
        {t("buttons.reserve")}
      </a>
      <ScrollLink
        to="location"
        smooth={true}
        duration={500}
        offset={-100}
        className="border border-[#3CBCE5] font-tt-firs-neue hover:bg-[#3CBCE5] rounded-lg text-center text-white px-5 py-1.5 items-center transition-colors duration-200 cursor-pointer"
        style={{ boxShadow: "0 0 6px rgba(60, 188, 229, 0.6)" }}
      >
        {t("buttons.location")}
      </ScrollLink>
    </div>
  );
};

export default ButtonsSection;
