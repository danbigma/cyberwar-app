import React, { useState, useEffect, useCallback } from "react";
import ButtonsSection from "./Sections/ButtonsSection";
import SidebarMenu from "./SidebarMenu";
import burgmenu from "../../assets/images/icons/burgmenu.svg";
import close from "../../assets/images/icons/close.svg";
import classNames from "classnames";

const MobileSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="lg:hidden absolute top-4 z-40 p-2 text-white"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <img src={isOpen ? close : burgmenu} alt="" />
      </button>

      <aside
        className={classNames(
          "fixed top-0 right-0 w-full h-full bg-[#222528] transform transition-transform duration-300 ease-in-out z-30",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex flex-col h-full items-center justify-center">
          <SidebarMenu onClose={toggleSidebar} />
          <div className="mt-auto hidden sm:block">
            <ButtonsSection />
          </div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
};

export default MobileSidebar;
