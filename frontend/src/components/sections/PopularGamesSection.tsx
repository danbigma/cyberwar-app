import React from "react";
import GamesSlider from "../GamesSlider";

const PopularGamesSection: React.FC = () => {
  return (
    <section id="games">
      <div className="mb-11">
        <GamesSlider />
      </div>
    </section>
  );
};

export default PopularGamesSection;
