import styles from "./Layout.module.css"

const TitleSection = () => {
    return <div className={styles.titleWrapper}>
        <b className={styles.title}>MediaMingle</b>
        <b className={styles.subtitle}>
            An app that lets you search for music, tweets AND movies!
        </b>
        <div className={styles.poweredBy}>
            Powered by
            <div className={styles.logoStack}>
                <img alt="Spotify Logo" className={styles.logo} src="/spotifylogo@2x.png" />
                <img alt="IMDB Logo" className={styles.logo} src="/imdblogo@2x.png" />
            </div>
        </div>
    </div>
}


const Layout = ({ children }) => {
    return <div>
        <section className={styles.home}>
            <TitleSection />
            {children}
        </section>
    </div>
}

export default Layout