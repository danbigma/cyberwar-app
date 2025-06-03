import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.svg";
import FooterLinkGroup from "../components/FooterLinkGroup";

const footerLinks = [
  { title: "menu.home", href: "#home" },
  { title: "menu.facilities", href: "#facilities" },
  { title: "menu.gallery", href: "#gallery" },
  { title: "menu.price", href: "#price" },
  { title: "menu.horario", href: "#price" },
  { title: "menu.juegos", href: "#games" },
  { title: "menu.contact", href: "#contact" },
  { title: "menu.privacidad", href: "/privacy-policy" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 mt-11">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start sm:px-0">
        <nav className="order-1 md:order-2 grid grid-cols-2 gap-4 px-20 sm:px-4 pb-8 sm:pb-0">
          <FooterLinkGroup links={footerLinks.slice(0, 4)} />
          <FooterLinkGroup links={footerLinks.slice(4)} />
        </nav>

        <div className="order-2 md:order-3 flex flex-col items-center md:items-end gap-2 text-center">
          <a
            href="mailto:info@cyberwar.fun"
            className="bg-[#222528] text-white border border-orange-500 hover:bg-[#E58A3C] rounded-md px-6 py-2 mb-6 transition-colors duration-200"
          >
            info@cyberwar.fun
          </a>
          <p className="text-gray-400 text-sm hidden sm:block">
            {t("footer.powered_by")}{" "}
            <a
              href="https://bigma.digital"
              target="_blank"
              className="text-white underline"
              rel="noopener noreferrer"
            >
              bigma.digital
            </a>
          </p>
        </div>

        <div className="order-3 md:order-1 flex flex-col items-center md:items-start">
          <img src={logo} alt="Cyber War Logo" className="h-auto w-28 mb-6" />
          <p className="text-gray-400 text-xs text-center font-roboto-mono mb-4">
            © {t("footer.rights_reserved")}
          </p>
          <p className="text-gray-400 text-sm sm:hidden">
            {t("footer.powered_by")}{" "}
            <a
              href="https://bigma.digital"
              target="_blank"
              className="text-white underline"
              rel="noopener noreferrer"
            >
              bigma.digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
