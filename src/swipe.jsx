import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "aos/dist/aos.css";
import AOS from "aos";

const TextSwiper = () => {
  const slides = [
    {
      header: "Innovative Solutions",
      content:
        "14",
    },
    {
      header: "Trusted Partner",
      content:
        "20",
    },
    {
      header: "Future-Driven Approach",
      content:
        "6",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div
      className="mt-16 p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[200px] "
      data-aos="fade-up"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center text-center h-full"
          >
            <h2 className="text-4xl font-bold text-white font-sulphur">{slide.header}</h2>
            <p className="mt-4 text-6xl text-gray-300 font-sulphur">{slide.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextSwiper;
