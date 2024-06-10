import styles from "./styles.module.css"
import faixa from "../../assets/models.svg"



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
                80% off
            </span>
            <div className={styles.FModels}>
            <img className={styles.imgModels} src={faixa} alt="" />
            </div>
            
        </div>
    )
}