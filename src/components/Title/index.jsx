import styles from "./styles.module.css"
import img from "../../assets/LogoText.svg"

export default function Title () {
  const textHeader = {
    title: "ZapCharge",
    subtitle: "Energia Rápida, Viagem Sustentável",
    description: "Na ZapCharge, oferecemos soluções avançadas para carregamento de veículos elétricos, projetadas para tornar sua experiência de recarga rápida, eficiente e ecológica. Nossos carregadores de última geração são fáceis de usar e ideais para residências, empresas e locais públicos, garantindo que você possa carregar seu carro elétrico com segurança e conveniência. Com a ZapCharge, você contribui para um futuro mais sustentável enquanto desfruta de uma viagem tranquila e sem interrupções."
    
  }
  return (
    <div className={styles.fontTitle}>
      <div className={styles.imgTitle}>

      </div>
    </div>

  )
}