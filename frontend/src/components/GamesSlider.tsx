// src/components/GamesSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next"; // Импортируем хук useTranslation

// Явный импорт изображений из папки games
import slide1 from "../assets/images/games/1.png";
import slide2 from "../assets/images/games/2.png";
import slide3 from "../assets/images/games/3.png";
import slide4 from "../assets/images/games/4.png";
import slide5 from "../assets/images/games/5.png";
import slide6 from "../assets/images/games/6.png";
import slide7 from "../assets/images/games/7.png";
import slide8 from "../assets/images/games/8.png";
import slide9 from "../assets/images/games/9.png";
import slide10 from "../assets/images/games/10.png";
import slide11 from "../assets/images/games/11.png";
import slide12 from "../assets/images/games/12.png";
import slide13 from "../assets/images/games/13.png";
import slide14 from "../assets/images/games/14.png";
import slide15 from "../assets/images/games/15.png";
import slide16 from "../assets/images/games/16.png";
import slide17 from "../assets/images/games/17.png";
import slide18 from "../assets/images/games/18.png";
import slide19 from "../assets/images/games/19.png";
import slide20 from "../assets/images/games/20.png";
import slide21 from "../assets/images/games/21.png";
import slide22 from "../assets/images/games/22.png";
import slide23 from "../assets/images/games/23.png";
import slide24 from "../assets/images/games/24.png";
import slide25 from "../assets/images/games/25.png";
import slide26 from "../assets/images/games/26.png";
import slide27 from "../assets/images/games/27.png";
import slide28 from "../assets/images/games/28.png";
import slide29 from "../assets/images/games/29.png";
import slide30 from "../assets/images/games/30.png";

// Массив с данными игр
const games = [
  { img: slide1 },
  { img: slide2 },
  { img: slide3 },
  { img: slide4 },
  { img: slide5 },
  { img: slide6 },
  { img: slide7 },
  { img: slide8 },
  { img: slide9 },
  { img: slide10 },
  { img: slide11 },
  { img: slide12 },
  { img: slide13 },
  { img: slide14 },
  { img: slide15 },
  { img: slide16 },
  { img: slide17 },
  { img: slide18 },
  { img: slide19 },
  { img: slide20 },
  { img: slide21 },
  { img: slide22 },
  { img: slide23 },
  { img: slide24 },
  { img: slide25 },
  { img: slide26 },
  { img: slide27 },
  { img: slide28 },
  { img: slide29 },
  { img: slide30 },
];

const GamesSlider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="text-center my-8">
      <h1 className="font-tt-firs-neue text-4xl text-center my-9">
        {t("gamesSlider.popularGames")}
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper rounded-3xl"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={game.img}
                alt={`Game ${index + 1}`}
                className="w-full h-auto rounded-3xl"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GamesSlider;
