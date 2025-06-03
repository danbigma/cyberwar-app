// src/components/CookieBanner.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TextWithLineBreaks from "../utils/TextWithLineBreaks";

const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#222528] p-4 z-50 flex flex-col sm:flex-row items-center justify-between text-white">
      <p className="text-sm mb-2 sm:mb-0">
        <TextWithLineBreaks text={t("cookieBanner.message")} />
        <a href="/privacy-policy" className="text-[#E58A3C] underline">
          {t("cookieBanner.learnMore")}
        </a>.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-[#E58A3C] px-4 py-2 rounded-lg text-white hover:bg-[#cc752f] transition-colors duration-300"
        >
          {t("cookieBanner.accept")}
        </button>
        <button
          onClick={handleClose}
          className="bg-[#474C52] px-4 py-2 rounded-lg text-white hover:bg-[#666a6f] transition-colors duration-300"
        >
          {t("cookieBanner.close")}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
