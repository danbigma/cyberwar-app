import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <div className="flex gap-2">
      {/* Десктоп версия */}
      <div className="hidden sm:flex justify-around gap-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`font-roboto-mono text-xs hover:text-white transition-colors duration-200 ${
            i18n.language === "en" ? "text-white font-bold" : "text-gray-500"
          }`}
        >
          En
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`font-roboto-mono text-xs hover:text-white transition-colors duration-200 ${
            i18n.language === "es" ? "text-white font-bold" : "text-gray-500"
          }`}
        >
          Es
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className={`font-roboto-mono text-xs hover:text-white transition-colors duration-200 ${
            i18n.language === "ru" ? "text-white font-bold" : "text-gray-500"
          }`}
        >
          Ru
        </button>
      </div>

      {/* Мобильная версия */}
      <div className="sm:hidden flex justify-center">
        <select
          onChange={handleSelectChange}
          value={i18n.language}
          className="bg-[#222528] text-white"
        >
          <option value="en">En</option>
          <option value="es">Es</option>
          <option value="ru">Ru</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
