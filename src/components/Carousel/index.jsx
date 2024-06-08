import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import carousel01 from "../../assets/carro01.jpg";
import carousel02 from "../../assets/carro02.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  carousel01,
  carousel02,
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

export default function CarouselSection() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true} showStatus={false} showArrows={true} showThumbs= {false}>
        {images.map((URL, index) => (
          <div>
            <img  alt="sample_file" src={URL} key={index} style={{height: "70vh", width: "100%", objectFit: "cover", position: "center", backgroundColor: "#333333"}}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}