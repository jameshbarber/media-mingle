import styles from "./ResultListItem.module.css"

const ResultListItem = ({ title, subtitle, image }) => {
    return <div className={styles.item}>
        <img style={styles.image} src={image} alt="" />
        <div className={styles.titleContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </div>
}

export default ResultListItem