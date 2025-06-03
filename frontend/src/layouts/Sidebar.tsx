import React from "react";
import SidebarMenu from "../components/sidebar/SidebarMenu";
import ButtonsSection from "../components/sidebar/Sections/ButtonsSection";
import LogoSection from "../components/sidebar/Sections/LogoSection";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block md:w-3/12 pr-4">
      <div className="rounded-2xl sticky top-4 bg-[url('/src/assets/images/Sidebar.svg')] bg-cover">
        <LogoSection />
        <SidebarMenu />
        <ButtonsSection />
      </div>
    </aside>
  );
};

export default Sidebar;
