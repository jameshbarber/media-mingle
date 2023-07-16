import styles from "./ResultListItem.module.css"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const ResultListItem = ({ title, subtitle, image }) => {

    if (!title && !subtitle && !image) return <Skeleton height={400}/>

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