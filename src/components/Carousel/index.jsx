import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, EffectFade, EffectCards, EffectFlip, EffectCube } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import styles from "./styles.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import carousel01 from "../../assets/carro01.png";
import carousel02 from "../../assets/carro02.png";
import carousel03 from "../../assets/carro03.png";
import carousel04 from "../../assets/carro04.png";
import carousel05 from "../../assets/carro05.png";
import carousel06 from "../../assets/carro06.png";



const images = [
  carousel01,
  carousel02,
  carousel03,
  carousel04,
  carousel05,
  carousel06,
];

export default function CarouselSection() {
  return (

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCoverflow]}
      autoplay={{
        delay: 1000000, disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 1}}
 
      style={{backgroundColor: "#E1FF27"}}
      effect='coverflow'
      coverflowEffect={{ rotate: 10, stretch: 0, depth: 10, modifier: 1, slideShadows: true}}
      loop={true}
    >
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
              objectPosition: "left",
              backgroundColor: "#333333",
            }}
          />
        </SwiperSlide>
      ))}
      </div>
    </Swiper>
  );
}