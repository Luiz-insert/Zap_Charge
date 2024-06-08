import styles from "./styles.module.css"


export default function CardSectionHome () {
    return (
    <div className={styles.sectionContainer}>
        <div className={styles.sectionCardGrid}>
            <div className={styles.sectionCard}>
                <div className={styles.sectionCardImg}>
                    <div className={styles.sectionCardVerse}>Ver especificação</div>
                </div>
                <div className={styles.sectionCardTitle}>GB/T</div>
                
            </div>
            <div className={styles.sectionCard}>
                <div className={styles.sectionCardImg}>
                    <div className={styles.sectionCardVerse}>Ver especificação</div>
                </div>
                <div className={styles.sectionCardTitle}>Mennekes</div>
                
            </div>
            <div className={styles.sectionCard}>
                <div className={styles.sectionCardImg}>
                    <div className={styles.sectionCardVerse}>Ver especificação  </div>
                </div>
                <div className={styles.sectionCardTitle}>SuperCharger</div>
                
            </div>
        </div>
    </div>
    )
}