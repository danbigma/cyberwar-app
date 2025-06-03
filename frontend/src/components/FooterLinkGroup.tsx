import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useActiveLink } from "../context/ActiveLinkContext";

interface FooterLinkGroupProps {
  links: Array<{ title: string; href: string }>;
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ links }) => {
  const { t } = useTranslation();
  const { setActiveLink } = useActiveLink();

  return (
    <div className="flex flex-col items-start gap-4">
      {links.map((link) => {
        const isAnchorLink = link.href.startsWith("#");

        const handleClick = () => {
          setActiveLink(link.href);
        };

        return isAnchorLink ? (
          <ScrollLink
            key={link.title}
            to={link.href.replace("#", "")}
            smooth={true}
            duration={500}
            offset={-100}
            className="text-xs text-gray-400 hover:text-white font-roboto-mono cursor-pointer text-start"
            onClick={handleClick}
          >
            {t(link.title)}
          </ScrollLink>
        ) : (
          <RouterLink
            key={link.title}
            to={link.href}
            className="text-xs text-gray-400 hover:text-white font-roboto-mono cursor-pointer text-start"
            onClick={handleClick}
          >
            {t(link.title)}
          </RouterLink>
        );
      })}
    </div>
  );
};

export default FooterLinkGroup;
