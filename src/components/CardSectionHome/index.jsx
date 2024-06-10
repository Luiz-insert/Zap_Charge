import { useState } from 'react';
import styles from "./styles.module.css"
import C1 from "../../assets/C1.svg"
import C2 from "../../assets/C2.svg"
import C3 from "../../assets/C3.svg"

import CY from "../../assets/CY.svg"
import CP from "../../assets/CP.svg"
import CO from "../../assets/CO.svg"

import info from "../../assets/info.svg"


export default function CardSectionHome () {
    const [isCardVisibleInfo, setCardVisibleInfo] = useState(true);
    const [isCardVisible1, setCardVisible1] = useState(true);
    const [isCardVisible2, setCardVisible2] = useState(true);
    const [isCardVisible3, setCardVisible3] = useState(true);

    const clickHandlerInfo = () => {
        setCardVisibleInfo(!isCardVisibleInfo);
    }

    const clickHandler1 = () => {
        setCardVisible1(!isCardVisible1);
    }
    const clickHandler2 = () => {
        setCardVisible2(!isCardVisible2);
    }
    const clickHandler3 = () => {
        setCardVisible3(!isCardVisible3);
    }
    return (
    <div className={styles.sectionContainer}>
        <div className={styles.glossaryIcon} style={{backgroundColor: isCardVisibleInfo ? '#E1FF27': '#333333'}} onClick={clickHandlerInfo}><img className={styles.glossaryImg} src={info} alt="" /></div>
        <div className={styles.sectionCardGrid} style={{display: isCardVisibleInfo ? 'none': 'flex'}}>
            <div className={styles.sectionCard} style={{display: isCardVisible1 ? 'flex' : 'none'}} onClick={clickHandler1}>
                <img className={styles.sectionCardImg} src={CY}>
                </img>
                <div className={styles.sectionCardTitle}>GB/T</div>
            </div>
            <div className={styles.sectionCardVerse} style={{display: isCardVisible1 ? 'none' : 'flex'}}onClick={clickHandler1}>
            <img className={styles.sectionCardImg} src={C1}>
                </img>
                <div className={styles.sectionCardTitle}>GB/T</div>
            </div>
            <div className={styles.sectionCard} style={{display: isCardVisible2 ? 'flex' : 'none'}} onClick={clickHandler2}>
                <img className={styles.sectionCardImg} src={CP}>
                </img>
                <div className={styles.sectionCardTitle}>Mennekes</div>
                
            </div>
            <div className={styles.sectionCardVerse}style={{display: isCardVisible2 ? 'none' : 'flex'}}onClick={clickHandler2}>
            <img className={styles.sectionCardImg} src={C2}>
                </img>
                <div className={styles.sectionCardTitle}>Mennekes</div>
            </div>
            <div className={styles.sectionCard} style={{display: isCardVisible3 ? 'flex' : 'none'}} onClick={clickHandler3}>
                <img className={styles.sectionCardImg} src={CO}>
                </img>
                <div className={styles.sectionCardTitle}>SuperCharger</div>
                
            </div>
            <div className={styles.sectionCardVerse} style={{display: isCardVisible3 ? 'none' : 'flex'}}onClick={clickHandler3}>
            <img className={styles.sectionCardImg} src={C3}>
                </img>
                <div className={styles.sectionCardTitle}>SuperCharger</div>
                
            </div>
        </div>
    </div>
    )
}