import styles from "./styles.module.css"
import img from "../../assets/M2-Icon.svg"

export default function Button () {
  const buttons = {
    page01: "Favoritos",
    page03: "Serviços",
  }
  return (
    <div className={styles.divButtons}>

      <button className={styles.bHeader1} type="button"></button>
      <button className={styles.bHeader2} type="button"></button>
      <button className={styles.bHeader3} type="button">
        <div className={styles.bHeader3Icon}></div>
        <p>Contate-nos</p>
      </button>
    </div>
    
  )
}