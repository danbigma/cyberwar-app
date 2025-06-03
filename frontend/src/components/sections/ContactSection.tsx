// src/components/ContactSection.tsx
import React from "react";
import { useTranslation } from "react-i18next"; // Импортируем хук useTranslation

// Импорт изображений, убедитесь, что пути правильные
import igIcon from "../../assets/images/ig.svg";
import tgIcon from "../../assets/images/tg.svg";
import waIcon from "../../assets/images/wa.svg";

const contacts = [
  {
    name: "Instagram",
    imgSrc: igIcon,
    bgColor: "hover:bg-[#E58A3C]",
    url: "https://www.instagram.com/cyber.war.club/", // Добавьте URL
  },
  {
    name: "Telegram",
    imgSrc: tgIcon,
    bgColor: "hover:bg-[#3CBCE5]",
    url: "https://t.me/cyber_war_alicante", // Добавьте URL
  },
  {
    name: "WhatsApp",
    imgSrc: waIcon,
    bgColor: "hover:bg-[#18CC94]",
    url: "https://wa.me", // Добавьте URL
  },
];

const ContactSection: React.FC = () => {
  const { t } = useTranslation(); // Инициализация useTranslation

  return (
    <section id="contact" className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-6">
        {t("contact.connect_with_us")}
      </h2>{" "}
      {/* Используем перевод */}
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {contacts.map((contact, index) => (
          <a
            key={contact.name}
            href={contact.url} // Используем URL из объекта
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center bg-[#33393F] ${contact.bgColor} cursor-pointer text-white py-14 rounded-3xl w-full sm:w-1/3 transition-colors duration-200`}
          >
            <img
              src={contact.imgSrc}
              alt={contact.name}
              className="w-8 h-8 mb-4"
            />
            <span>{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
