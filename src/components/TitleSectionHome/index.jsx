import styles from "./styles.module.css"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, EffectFlip} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

import lg1 from "../../assets/lg1.svg"
import lg2 from "../../assets/lg2.svg"
import lg3 from "../../assets/lg3.svg"
import lg4 from "../../assets/lg4.svg"
import lg5 from "../../assets/lg5.svg"
import lg6 from "../../assets/lg6.svg"
import lg7 from "../../assets/lg7.svg"
import lg8 from "../../assets/lg8.svg"
import lg9 from "../../assets/lg9.svg"

export default function TitleSectionHome () {
    const cars = {
        Porsche: "Taycan",
        Tesla: "Model S",
        Audi: "E-Tron GT",
        Lucid: "Air",
        Mercedes: "EQS",
        BMW: "i4",
      }
    return (
        <div className={styles.pModels}>
            <p>Compativeis com a maioria das marcas</p> 
            <span>
                até 80% off
            </span>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode, EffectFlip]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false}}
            effect="flip"
            loop={true}
            
            className={styles.FModels}>
                <SwiperSlide><img className={styles.imgModels} src={lg1} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg2} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg3} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg4} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg5} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg6} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg7} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg8} alt="" /></SwiperSlide>
                <SwiperSlide><img className={styles.imgModels} src={lg9} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}