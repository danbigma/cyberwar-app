import React from "react";
import instagram from "../../assets/images/instagram.svg"; // Импортируем SVG как модуль
import phone from "../../assets/images/phone.svg";
import telegram from "../../assets/images/telegram.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../../assets/images/logo.svg";
import MobileSidebar from "../sidebar/MobileSidebar";

const TopBar: React.FC = () => {
  return (
    <div className="pt-5 pb-2 px-5 flex justify-between items-end">
      <a href="/" className=" sm:hidden">
        <img className="h-auto w-14" alt="logo" src={logo} />
      </a>
      <div className="hidden sm:block">
        <LanguageSwitcher />
      </div>
      <ul className="flex justify-around gap-2">
        <li className="cursor-pointer">
          <a
            href="https://www.instagram.com/cyber.war.club/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon h-8 sm:h-6" src={instagram} alt="" />
          </a>
        </li>
        <li className="cursor-pointer">
          <img className="icon h-8 sm:h-6" src={phone} alt="" />
        </li>
        <li className="cursor-pointer">
          <a href="https://t.me/cyber_war_alicante">
            <img className="icon h-8 sm:h-6" src={telegram} alt="" />
          </a>
        </li>
      </ul>
      <div className="sm:hidden  block">
        <LanguageSwitcher />
      </div>
      <div className="block w-14 h-14 sm:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default TopBar;
