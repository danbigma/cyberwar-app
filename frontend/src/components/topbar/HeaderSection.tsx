import React from "react";
import TopBar from "./TopBar";

const HeaderSection: React.FC = () => {

  return (
    <div className="sticky top-0 bg-[#222528] rounded-t-3xl mt-4 z-20">
      <TopBar />
      <hr className="border-[#33393F] mt-2" />
    </div>
  );
};

export default HeaderSection;