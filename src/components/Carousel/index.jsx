import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import carousel01 from "../../assets/carro01.png";
import carousel02 from "../../assets/carro02.png";
import carousel03 from "../../assets/carro03.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  carousel01,
  carousel02,
  carousel03
];

export default function CarouselSection() {
  return (
    <div className={styles.box}>
      <Carousel useKeyboardArrows={true} showStatus={false} showArrows={true} showThumbs= {false} interval={3000} transitionTime={300} swipeable = {true} infiniteLoop = {true}>
        {images.map((URL, index) => (
          <div>
            <img  alt="sample_file" src={URL} key={index} style={{height: "60vh", width: "100%", objectFit: "cover", position: "center", backgroundColor: "#333333"}}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}