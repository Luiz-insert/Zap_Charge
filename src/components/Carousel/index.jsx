import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import styles from "./styles.module.css";
import carousel01 from "../../assets/carro01.png";
import carousel02 from "../../assets/carro02.png";
import carousel03 from "../../assets/carro03.png";



const images = [
  carousel01,
  carousel02,
  carousel03
];

export default function CarouselSection() {
  return (

    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1000, disableOnInteraction: false, stopOnLastSlide: false}}>
      <div className={styles.box}>
      {images.map((URL, index) => (
        <SwiperSlide key={index}>
          <img
            alt="sample_file"
            src={URL}
            style={{
              height: "60vh",
              width: "100%",
              objectFit: "cover",
              position: "center",
              backgroundColor: "#333333",
            }}
          />
        </SwiperSlide>
      ))}
      </div>
    </Swiper>
  );
}