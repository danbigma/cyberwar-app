import React from "react";

const Loader: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#191C1F] z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#E58A3C] border-b-4"></div>
  </div>
);

export default Loader;
