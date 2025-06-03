import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import ruTranslation from "./locales/ru/translation.json";

const savedLanguage = localStorage.getItem("language") ?? "es";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
  lng: savedLanguage,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
