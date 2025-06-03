import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useNavigationHandler } from "../../utils/navigationHandler";
import { useActiveLink } from "../../context/ActiveLinkContext";
import classNames from "classnames";

interface SidebarMenuItemProps {
  href: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClose?: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  href,
  text,
  Icon,
  onClose,
}) => {
  const { handleNavigation } = useNavigationHandler();
  const { t } = useTranslation();
  const { activeLink, setActiveLink } = useActiveLink();

  const isActive =
    activeLink === href || (activeLink === "" && href === "#home");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(href);
    handleNavigation(href);
    if (onClose) onClose();
  };

  const linkContent = (
    <>
      <div
        className={classNames(
          "flex justify-center items-center w-8 h-8 group-hover:bg-[#E58A3C] transition-colors duration-200 rounded-md",
          {
            "bg-[#E58A3C]": isActive,
            "bg-[#33393F]": !isActive,
          }
        )}
        style={{
          boxShadow: isActive ? "0 0 6px rgba(229, 138, 60, 0.6)" : undefined,
        }}
      >
        <Icon
          className={classNames(
            "text-[#474C52] group-hover:text-white transition-colors duration-200",
            {
              "text-white": isActive,
            }
          )}
        />
      </div>
      <span className="ml-2 font-roboto-mono group-hover:text-white transition-colors duration-200">
        {t(`menu.${text.toLowerCase()}`)}
      </span>
    </>
  );

  const linkClassName = classNames(
    "flex items-center text-3xl sm:text-base group cursor-pointer",
    {
      "text-white": isActive,
      "text-[#909192]": !isActive,
    }
  );

  // Определяем, какой компонент использовать
  const isAnchorLink = href.startsWith("#");
  const isOnHomePage = window.location.pathname === "/"; // Используем window.location

  let linkElement;

  if (isAnchorLink) {
    if (isOnHomePage) {
      linkElement = (
        <ScrollLink
          to={href.replace("#", "")}
          smooth={true}
          duration={300}
          offset={-100}
          className={linkClassName}
          onClick={handleClick}
        >
          {linkContent}
        </ScrollLink>
      );
    } else {
      linkElement = (
        <Link to={`/${href}`} className={linkClassName} onClick={handleClick}>
          {linkContent}
        </Link>
      );
    }
  } else {
    linkElement = (
      <Link to={href} onClick={handleClick} className={linkClassName}>
        {linkContent}
      </Link>
    );
  }

  return <li className="flex items-center mb-4">{linkElement}</li>;
};

export default SidebarMenuItem;
