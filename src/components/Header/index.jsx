import Title from "../Title"
import logoImg from "../../assets/lW.svg"
import logoImg2 from "../../assets/ly.svg"

import Button from "../Button"
import styles from "./styles.module.css"




export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.logoHeader}>
        <img src={logoImg} alt="" />
        <img src={logoImg2} alt="" />
      </div>
      <Title />
      <div className={styles.buttonsHeader}>
        <Button />
      </div>
    </header>
  )
}