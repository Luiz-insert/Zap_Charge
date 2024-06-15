import styles from "./styles.module.css";
import logo from "../../assets/LogoIconSimp.svg";
import icon1 from "../../assets/ii1.svg";
import icon2 from "../../assets/ii2.svg";
import icon3 from "../../assets/ii3.svg";

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerImg}>
                <img src={logo} alt="Logo ZAP CHARGE" style={{width: "16px"}}/>
                <p>© 2021 ZAP CHARGE. Todos os direitos reservados.</p>
            </div>
            <div>
                <p>CNPJ: 00.000.000/0000-00 | Belo Horizonte - MG</p>
                <p></p>
            </div>
            <div className= {styles.groupFooterIcon}>
                <div className={styles.footerIcon}><img src={icon1} className={styles.iImg} alt="" /></div>
                <div className={styles.footerIcon}><img src={icon2} className={styles.iImg} alt="" /></div>
                <div className={styles.footerIcon}><img src={icon3} className={styles.iImg} alt="" /></div>
            </div>
        </div>
    )
}