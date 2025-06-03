import React, { useState } from "react";
import logo from "../../../assets/images/logo.svg";
import gift from "../../../assets/images/gift.svg";
import Modal from "../../modal/Modal";

const LogoSection: React.FC = () => {
  // Деструктурируем useState, чтобы получить и значение состояния, и сеттер
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex gap-14">
      <a href="/">
        <img className="h-auto w-28 mb-14" alt="logo" src={logo} />
      </a>
      <div className="flex flex-col items-center pt-6">
        {/* Используем кнопку вместо div, чтобы избежать предупреждения */}
        <button
          onClick={openModal}
          className="h-auto w-10 p-2 mb-4 bg-[#33393F] cursor-pointer rounded-lg hover:bg-[#3CBCE5] transition-colors duration-200 focus:outline-none"
          aria-label="Open promo modal"
        >
          <img alt="promo" src={gift} />
        </button>
        <span className="text-xs text-gray-500 font-roboto-mono">
          Game Offer
        </span>
      </div>
      {/* Передаем isModalOpen в модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LogoSection;
