import Header from "../Header"
import CarouselSection from "../Carousel"
import CardSectionHome from "../CardSectionHome"
import CardSectionHomeProducts from "../CardSectionHomeProducts"
import TitleSectionHome from "../TitleSectionHome"
import styles from "./styles.module.css"

export default function Main () {

  return (

    <div>
      <CarouselSection />
      <div className={styles.mainContainer}>
        <TitleSectionHome />
        <CardSectionHome /> 
        <CardSectionHomeProducts />
      </div>    
    </div>

  )
}