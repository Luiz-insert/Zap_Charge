import styles from "./styles.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
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
import cartao from "../../assets/cartao.svg"
import caixa from "../../assets/caixa.svg"
import fone from "../../assets/fone.svg"

import bb from "../../assets/bb.svg"



export default function CardSectionHomeProducts() {
    
    return (
        <div>
        <div style={{background: '#333333'}}>
            <div>
                <div className={styles.bannerTitle}>Rapido e sustentavel direto da sua casa</div>
            </div>
            <div className={styles.section01}>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p1} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge Mnk</div>
                    <div className={styles.cardProductPriceInitial}>R$ 5.899,00</div>
                    <div className={styles.cardProductPrice}>R$ 3.999,90</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p2} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge GB/T</div>
                    <div className={styles.cardProductPriceInitial}>R$ 3.650,50</div>
                    <div className={styles.cardProductPrice}>R$ 3.190,00</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
                <div className={styles.cardProduct}>
                    <img className={styles.cardProductImage} src={p3} alt="product" />
                    <div className={styles.cardProductTitle}>EcoCharge Super</div>
                    <div className={styles.cardProductPriceInitial}>R$ 8.200,00</div>
                    <div className={styles.cardProductPrice}>R$ 6.400,90</div>
                    <div className={styles.cardProductMkt}>Comprar</div>
                </div>
            </div>
            <div>
                <div className={styles.bannerTitle2}>Portatil, pratico e eficiente</div>
            </div>
            <div className={styles.section02}>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p4} alt="product" />
                <div className={styles.cardProductTitle}>GB/T Portable Pro</div>
                <div className={styles.cardProductPriceInitial}>R$ 860,99</div>
                <div className={styles.cardProductPrice}>R$ 540,90</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p5} alt="product" />
                <div className={styles.cardProductTitle}>SuperCharger Portable Pro</div>
                <div className={styles.cardProductPriceInitial}>R$ 1220,00</div>
                <div className={styles.cardProductPrice}>R$ 999,90</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p6} alt="product" />
                <div className={styles.cardProductTitle}>Mnk Portable Pro </div>
                <div className={styles.cardProductPriceInitial}>R$ 780,90</div>
                <div className={styles.cardProductPrice}>R$ 650,90</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            <div className={styles.cardProduct}>
                <img className={styles.cardProductImage} src={p7} alt="product" />
                <div className={styles.cardProductTitle}>ElectricPulse</div>
                <div className={styles.cardProductPriceInitial}>R$ 1.480,90</div>
                <div className={styles.cardProductPrice}>R$ 1.200,90</div>
                <div className={styles.cardProductMkt}>Comprar</div>
            </div>
            </div>
    <div className={styles.bannerTitle3}>Em destaque 80% OFF</div>
    <Swiper
    autoplay={{ delay: 1000, disableOnInteraction: false }}
    spaceBetween={50}
    slidesPerView={1}
    scrollbar={{ draggable: true, enabled: true}}
    >
        <SwiperSlide>
            <div className={styles.destaqueOff}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.destaqueOff2}></div>
        </SwiperSlide>

    </Swiper>
    
    <div className={styles.sectionDestaque}>
        <div className={styles.bannerTitle31}>Semelhantes</div>
        <div className={styles.section03}>
        <div className={styles.cardProductD}>
                <img className={styles.cardProductImage} src={p7} alt="product" />
                <div className={styles.cardProductTitle}>ElectricPulse</div>
                <div className={styles.cardProductPriceInitial}>R$ 1.480,90</div>
                <div className={styles.cardProductPrice}>R$ 1.200,90</div>
                <div className={styles.cardProductMktD}>Comprar</div>
            </div>
            <div className={styles.cardProductD}>
                <img className={styles.cardProductImage} src={p7} alt="product" />
                <div className={styles.cardProductTitle}>ElectricPulse</div>
                <div className={styles.cardProductPriceInitial}>R$ 1.480,90</div>
                <div className={styles.cardProductPrice}>R$ 1.200,90</div>
                <div className={styles.cardProductMktD}>Comprar</div>
            </div>
            <div className={styles.cardProductD}>
                <img className={styles.cardProductImage} src={p7} alt="product" />
                <div className={styles.cardProductTitle}>ElectricPulse</div>
                <div className={styles.cardProductPriceInitial}>R$ 1.480,90</div>
                <div className={styles.cardProductPrice}>R$ 1.200,90</div>
                <div className={styles.cardProductMktD}>Comprar</div>
            </div>
        </div>
    </div>
        </div>
        <div className={styles.infoRec}>
            <div className={styles.bannerTitle4}>Em breve!</div>
            <div className={styles.rStation}>
                <img className={styles.bb} src={bb} alt="" />
            </div>
        </div>
        <div className={styles.infoCardBanner}>
            <div className={styles.infoGroup}>
            <img className={styles.infoCardImg} src={banner01} alt="" />
            <div className={styles.infoCardDescription}>
                <div className={styles.infoCardTitle}>Garantia 5 anos</div>
                <div className={styles.infoCardSubTitle}>Introduzindo o Futuro da Recarga: Conheça nossos modelos de Carregadores Elétricos de Carro! Recarga rápida, conveniência inteligente e sustentabilidade - tudo em um único dispositivo. Faça parte da revolução elétrica. </div>
                <div className={styles.infoCardBtn}>Garantia extendida</div>
            </div>
            </div>

            <div className={styles.infoCardGroup}>
                <div className={styles.infoCardDescription2}>
                    <img className={styles.van} src={caixa} alt="" />
                    <div className={styles.deliveryCard}>Retirada em 1 hora</div>
                </div>
                <div className={styles.infoCardDescription3}>
                    <img className={styles.van} src={cartao} alt="" />
                    <div className={styles.deliveryCard}>Parcelas de até 12x</div>
                </div>
                <div className={styles.infoCardDescription4}>
                    <img className={styles.van} src={van} alt="" />
                    <div className={styles.deliveryCard}>Frete gratis em todo sudeste</div>
                </div>
                <div className={styles.infoCardDescription5}>
                    <img className={styles.van} src={fone} alt="" />
                    <div className={styles.deliveryCard}>Atendimento personalizado</div>
                </div>
            </div>

        </div>


        <div className={styles.infoCardBanner2}>
            
        </div>

        </div>
        
    )
}
