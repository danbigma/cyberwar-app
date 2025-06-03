// src/components/ClubPhotosSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Импорт изображений
import photo1 from "../assets/images/club/1.png";
import photo2 from "../assets/images/club/2.png"; 
import photo3 from "../assets/images/club/3.png";
import photo4 from "../assets/images/club/4.png";
import photo5 from "../assets/images/club/5.png"; 
import photo6 from "../assets/images/club/6.png";
import photo7 from "../assets/images/club/7.png";
import photo8 from "../assets/images/club/8.png"; 
import photo9 from "../assets/images/club/9.png";
import photo10 from "../assets/images/club/10.png";

// Массив с изображениями
const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

const ClubPhotosSlider: React.FC = () => {
  return (
    <section id="gallery" className="text-center my-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper rounded-3xl"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={photo}
                alt={`Club ${index + 1}`}
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClubPhotosSlider;