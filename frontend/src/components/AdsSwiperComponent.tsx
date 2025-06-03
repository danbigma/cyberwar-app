import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import images
import tempImg from "../assets/images/games/tempimg.png";
import tempImg2 from "../assets/images/games/tempimg2.png";
import tempImg3 from "../assets/images/games/tempimg3.png";

// Array with slides data including the three images
const slidesData = [
  { imgSrc: tempImg, description: "FC24 - Torneo de Verano" },
  { imgSrc: tempImg2, description: "Evento Especial" },
  { imgSrc: tempImg3, description: "Competencia Gamer" },
];

const AdsSwiperComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-11">
      <h2 className="text-4xl sm:text-2xl sm:text-left my-1 mb-8 font-pixeloid-sans text-center">
        {t("home.ads_title")}
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-96"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div className="relative rounded-3xl">
              <img
                src={slide.imgSrc}
                alt={slide.description}
                className="rounded-3xl w-full h-full object-cover swiper-lazy"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="left-8 bottom-8 absolute text-white text-lg font-medium leading-loose">
                {slide.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsSwiperComponent;
