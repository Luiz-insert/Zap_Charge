import styles from "./styles.module.css"
import p1 from "../../assets/p1.svg"
import p2 from "../../assets/p2.svg"
import p3 from "../../assets/p3.svg"
import p4 from "../../assets/p4.svg"
import p5 from "../../assets/p5.svg"
import p6 from "../../assets/p6.svg"
import p7 from "../../assets/p7.svg"
import p8 from "../../assets/p8.svg"

import banner01 from "../../assets/banner01.svg"
import van from "../../assets/van.svg"


export default function CardSectionHomeProducts() {
    return (
        <div>
        <div>
            <div>
                <div className={styles.bannerTitle}>Rapido e sustentavel direto da sua casa</div>
            </div>
            <div className={styles.section01}>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p1} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge Mnk</div>
                    <div className={styles.cardProductPrice}>R$ 3650</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p2} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge GB/T</div>
                    <div className={styles.cardProductPrice}>R$ 3650</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p3} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge Super</div>
                    <div className={styles.cardProductPrice}>R$ 3650</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
            </div>
            <div>
                <div className={styles.bannerTitle}>Portatil, pratico e eficiente</div>
            </div>
            <div className={styles.section02}>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p4} alt="product" />
                <div className={styles.cardProductTitle}>GB/T Portable Pro</div>
                <div className={styles.cardProductPrice}>R$ 3650</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p5} alt="product" />
                <div className={styles.cardProductTitle}>SuperCharger Portable Pro</div>
                <div className={styles.cardProductPrice}>R$ 3650</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p6} alt="product" />
                <div className={styles.cardProductTitle}>Mnk Portable Pro </div>
                <div className={styles.cardProductPrice}>R$ 3650</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p7} alt="product" />
                <div className={styles.cardProductTitle}>ElectricPulse</div>
                <div className={styles.cardProductPrice}>R$ 3650</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p8} alt="product" />
                <div className={styles.cardProductTitle}>RapidVolt</div>
                <div className={styles.cardProductPrice}>R$ 3650</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            </div>
    
        </div>
        <div className={styles.infoCardBanner}>
            <img className={styles.infoCardImg} src={banner01} alt="" />
            <div className={styles.infoCardDescription}>
                <div className={styles.infoCardTitle}>Garantia 5 anos</div>
                <div className={styles.infoCardSubTitle}>Introduzindo o Futuro da Recarga: Conheça nossos modelos de Carregadores Elétricos de Carro! Recarga rápida, conveniência inteligente e sustentabilidade - tudo em um único dispositivo. Faça parte da revolução elétrica. </div>
                <div className={styles.infoCardBtn}>Quero Conhecer!</div>
            </div>
            <div className={styles.infoCardDescription2}>
                <img className={styles.van} src={van} alt="" />
                <div className={styles.deliveryCard}>Entrega rapida</div>
            </div>
        </div>
        <div className={styles.infoCardBanner2}></div>

        </div>
    )
}
