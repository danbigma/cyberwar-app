import React, { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import gift from "../assets/images/gift.svg";
import Modal from "./modal/Modal";

type CategoryType = "PC" | "PS" | "Cine";

const PricesCard: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [hoveredPrice, setHoveredPrice] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("PC");

  const prices = useMemo(
    () => ({
      PC: ["1h", "3h", "6h", "12h"],
      PS: ["1hPS", "3hPS", "6hPS", "12hPS"],
      Cine: ["1hC", "3hC", "6hC", "12hC"],
    }),
    []
  );

  const getRandomPrice = useCallback(
    (category: CategoryType, previousPrice: string) => {
      const availablePrices = prices[category].filter(
        (price) => price !== previousPrice
      );
      const randomIndex = Math.floor(Math.random() * availablePrices.length);
      return availablePrices[randomIndex];
    },
    [prices]
  );

  const [activePrice, setActivePrice] = useState<string>(() =>
    getRandomPrice(selectedCategory, "")
  );

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setActivePrice(getRandomPrice(category, ""));
  };

  const handleMouseEnter = (price: string) => {
    setHoveredPrice(price);
  };

  const handleMouseLeave = () => {
    setHoveredPrice(null);
  };

  const handlePriceClick = (price: string) => {
    setActivePrice(price);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-[#33393F] p-6 rounded-3xl mb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{t("prices.title")}</h1>
          <div className="flex space-x-4">
            {["PC", "PS", "Cine"].map((category) => (
              <button
                key={category}
                className={`px-2 py-1 text-sm font-semibold ${
                  selectedCategory === category
                    ? "underline text-white"
                    : "text-gray-400"
                }`}
                onClick={() => handleCategoryChange(category as CategoryType)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {prices[selectedCategory].map((price) => {
            const isActive = hoveredPrice === price || activePrice === price;
            const buttonClass = isActive
              ? "bg-[#E58A3C]"
              : "bg-gray-600 hover:bg-[#E58A3C]";
            return (
              <button
                key={price}
                tabIndex={0}
                className={`p-4 rounded-lg text-center text-xl sm:text-lg cursor-pointer transition-colors duration-200 ${buttonClass}`}
                onMouseEnter={() => handleMouseEnter(price)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handlePriceClick(price)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    handlePriceClick(price);
                }}
              >
                {t(`prices.options.${price}`)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-[#33393F] py-10 px-6 rounded-3xl flex items-center">
        <div className="flex items-center justify-center rounded-3xl text-center">
          <button
            className="h-auto w-10 p-2 cursor-pointer rounded-lg bg-[#3CBCE5] transition-colors duration-200"
            onClick={openModal}
            aria-label="Открыть предложение"
          >
            <img className="w-full h-full" alt="" src={gift} />
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-md font-bold">
            {t("prices.offer_title")}{" "}
            <span className="text-[#989B9E] text-sm">
              {t("prices.offer_description")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricesCard;
