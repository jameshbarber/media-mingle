import styles from "./ResultListItem.module.css"

const ResultListItem = ({ title, subtitle, image }) => {
    return <div className={styles.item} style={{
        backgroundImage: `url(${image})`
    }}>
        <div className={styles.overlay}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
        </div>
    </div>

}

export default ResultListItem