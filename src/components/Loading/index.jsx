import styles from "./styles.module.css"

export default function Loading() {

  return (
    <div className={styles.loadingSection}>
        <div className={styles.loadingIcon}>
            <div className={styles.groupPartIconBattery}>
                <div className={styles.partOneIconBattery}></div>
                <div className={styles.partTwoIconBattery}>
                    <div className={styles.partTwoIconBatteryInnerCharge01}></div>
                </div>
            </div>
            <div className={styles.pulseIcon}></div>
        </div>
    </div>
  );
};
