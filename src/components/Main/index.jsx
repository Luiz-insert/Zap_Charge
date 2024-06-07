import Header from "../Header"
import CarouselSection from "../Carousel"
import CardSectionHome from "../CardSectionHome"
import styles from "./styles.module.css"

export default function Main () {
  const cars = {
    Porsche: "Taycan",
    Tesla: "Model S",
    Audi: "E-Tron GT",
    Lucid: "Air",
    Mercedes: "EQS",
    BMW: "i4",
  }
  return (
    
    <div className={styles.mainContainer}>
      <CarouselSection />
      <p>
        Compativeis com a maioria das marcas
          <span>
            Modelos
          </span>
          {cars.Porsche} - {cars.Mercedes} - {cars.BMW}
      </p>
      <CardSectionHome /> 

    </div>
  )
}