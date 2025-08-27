// src/Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Carousel.css";

SwiperCore.use([Autoplay]);

export default function Carousel({ items }) {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        centeredSlides={false}

        // ⬇️ Slow it down:
        autoplay={{ 
          delay: 5000,                // wait 5s between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: true     // optional: pause on hover (desktop)
        }}
        speed={1200}                   // 1.2s transition animation

        slidesOffsetBefore={18}
        breakpoints={{
          640:  { slidesPerView: 1.15 },
          1024: { slidesPerView: 1.3 }
        }}
      >
        {items.map(({ kicker, title, subtitle }, idx) => (
          <SwiperSlide key={idx}>
            <article className="carousel-card text-card">
              <span className="slide-kicker">{kicker}</span>
              <h3 className="slide-title">{title}</h3>
              <p className="slide-sub">{subtitle}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
